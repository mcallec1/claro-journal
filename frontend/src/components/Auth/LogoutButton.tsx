import React from "react";
import { supabase } from "components/Auth/supabaseClient";

export const LogoutButton: React.FC = () => {

  return (
    <button className="button__logout" onClick={() => supabase.auth.signOut()}>
      Log Out
    </button>
  );
};
