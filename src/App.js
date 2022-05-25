import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import SimpleForm from "./pages/SimpleForm";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* path="/" == index */}
        <Route index element={<Home/>} /> 
        <Route path="/movies" element={<Movies />} >
          <Route path=":id" element={<Movie />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/seaons" element={<UseEffect />} />
      </Route>
      <Route path="/memo" element={<UseMemo />} />
      <Route path="/form" element={<SimpleForm />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>

  );
}

export default App;
