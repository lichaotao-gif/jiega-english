// ============================================================
// 接嘎英语 · Supabase 客户端与云同步
// 这两个值是“公开可用”的，放前端没问题
// ============================================================
const SUPABASE_URL = "https://fpenvsnutxpsdulzjiip.supabase.co";
const SUPABASE_KEY = "sb_publishable_AqsI0zO7_k-uUGs7bnVGiA_G2S0QgMi";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ---------- 认证 ----------
async function authSignUp(email, password) {
  return sb.auth.signUp({ email, password });
}

async function authSignIn(email, password) {
  return sb.auth.signInWithPassword({ email, password });
}

async function authSignOut() {
  return sb.auth.signOut();
}

async function authGetUser() {
  const { data } = await sb.auth.getUser();
  return data?.user || null;
}

// ---------- 云端数据：拉取 ----------
// 返回 { favorites, mastered, checkins, profile, todayCount }
async function cloudPull(userId) {
  const [fav, mas, chk, prof] = await Promise.all([
    sb.from("favorites").select("entry_id").eq("user_id", userId),
    sb.from("mastered").select("entry_id").eq("user_id", userId),
    sb.from("checkins").select("day, count").eq("user_id", userId),
    sb.from("profiles").select("*").eq("id", userId).single()
  ]);

  const checkins = {};
  (chk.data || []).forEach((row) => { checkins[row.day] = row.count; });

  const profileRow = prof.data || {};
  return {
    favorites: (fav.data || []).map((r) => r.entry_id),
    mastered: (mas.data || []).map((r) => r.entry_id),
    checkins,
    todayCount: profileRow.today_count || 0,
    profile: {
      nickname: profileRow.nickname || "旅行学习者",
      account: profileRow.account || "",
      level: profileRow.level || "Travel Starter",
      avatar: profileRow.avatar || "接"
    }
  };
}

// ---------- 云端数据：写入（乐观更新后台同步） ----------
async function cloudAddFavorite(userId, entryId) {
  return sb.from("favorites").upsert({ user_id: userId, entry_id: entryId });
}
async function cloudRemoveFavorite(userId, entryId) {
  return sb.from("favorites").delete().eq("user_id", userId).eq("entry_id", entryId);
}
async function cloudAddMastered(userId, entryId) {
  return sb.from("mastered").upsert({ user_id: userId, entry_id: entryId });
}
async function cloudSetTodayCount(userId, count) {
  return sb.from("profiles").update({ today_count: count, updated_at: new Date().toISOString() }).eq("id", userId);
}
async function cloudSetCheckin(userId, day, count) {
  return sb.from("checkins").upsert({ user_id: userId, day, count });
}
async function cloudUpdateProfile(userId, fields) {
  return sb.from("profiles").update({ ...fields, updated_at: new Date().toISOString() }).eq("id", userId);
}

// ---------- 首次登录：把本地数据合并上云 ----------
async function cloudMergeLocal(userId, local) {
  const tasks = [];
  (local.favorites || []).forEach((id) => tasks.push(cloudAddFavorite(userId, id)));
  (local.mastered || []).forEach((id) => tasks.push(cloudAddMastered(userId, id)));
  Object.entries(local.checkins || {}).forEach(([day, count]) => tasks.push(cloudSetCheckin(userId, day, count)));
  if (tasks.length) await Promise.allSettled(tasks);
}
