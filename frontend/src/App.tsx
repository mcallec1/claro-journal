import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Session } from "@supabase/supabase-js";
import { supabase } from "components/Auth/supabaseClient";


const queryConfig = {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  }
  
const queryClient = new QueryClient(queryConfig);

export const App = () => {

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google", "facebook"]}
            theme="dark"
          />
        </div>

      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
    </BrowserRouter>
    );
  }
}

export default App

