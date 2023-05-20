// このページは説明文のページです。


import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig.js";
import {
  useNavigate,
  Navigate
} from "react-router-dom";


const Mypage = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  }

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
              <h1>ゲームの説明</h1>
              <li>このゲームは国際宇宙ステーションの場所を当てるゲームだ！ 
        </li>
        <li>
                緯度と経度から場所を割り出してもらうよ！
              </li>
              <li>
                ここだと思うところを地図にタップ！
              </li>
              <li>
               近ければ近いほど得点が高くなるぞ!
              </li>
              <li>
              100点目指して頑張ってね！</li>
            <button onClick={() => navigate('')}>Game start！
            </button>
              <button  onClick={logout}>ログアウト</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;