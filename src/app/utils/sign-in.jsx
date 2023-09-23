
import { supabase } from "./supabase";



export const signInWithThirdParty = async (provider) => {
  
  let { data, error } = await supabase.auth.signInWithOAuth({
  provider: provider,
  options: {
    redirectTo: '/'
  }
})
if (data) {
  return data;
}
if (error) {
  console.log(error.message);
}

}

module.exports = {
  signInWithThirdParty
}