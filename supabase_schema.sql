-- ============================================================
-- 接嘎英语 · Supabase 数据库结构
-- 在 Supabase 控制台 SQL Editor 里整段粘贴执行即可
-- ============================================================

-- 1. 用户资料（对应原 jiega:profile + todayCount）
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text not null default '旅行学习者',
  account text,
  level text not null default 'Travel Starter',
  avatar text not null default '接',
  today_count int not null default 0,
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- 2. 收藏（对应原 jiega:favorites）
create table if not exists public.favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  entry_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, entry_id)
);
alter table public.favorites enable row level security;
create policy "favorites_all_own" on public.favorites for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 3. 已掌握（对应原 jiega:mastered）
create table if not exists public.mastered (
  user_id uuid not null references auth.users(id) on delete cascade,
  entry_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, entry_id)
);
alter table public.mastered enable row level security;
create policy "mastered_all_own" on public.mastered for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 4. 打卡记录（对应原 jiega:checkins，每天一行）
create table if not exists public.checkins (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  count int not null default 1,
  primary key (user_id, day)
);
alter table public.checkins enable row level security;
create policy "checkins_all_own" on public.checkins for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 5. 新用户注册时自动创建一行 profile
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, account)
  values (new.id, split_part(coalesce(new.email, ''), '@', 1))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
