import { supabase } from "./supabase";

export const signInWithThirdParty = async (provider: 'github' | 'facebook' | 'google' | 'linkedin') => {
let { data, error } = await supabase.auth.signInWithOAuth({
  provider: provider,
})
console.log(data);
if (error) {
  console.log(error.message);
}
}

module.exports = {
  signInWithThirdParty
}