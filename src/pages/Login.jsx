import { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";
import BaseModal from "../components/BaseModal";
import api from "../utils/api";

export default function Login() {
  const [settings, setSettings] = useStorage("settings");
  const [sohwConfig, setShowConfig] = useState(false);
  const [serverURL, setServerURL] = useState("http://");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!settings) {
      setShowConfig(true);
    }
  }, [settings]);

  useEffect(() => {
    const testApi = async () => {
      try {
        const response = await api.get("/test");
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    testApi();
  }, []);

  const handleSaveSetting = () => {
    setSettings({ ...settings, serverURL });
    setShowConfig(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await api.post("/user/auth/login", { username, password });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* form setting */}
      <BaseModal show={sohwConfig} title={"Configuration"}>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Server URL</label>
              <input
                type="text"
                className="form-control"
                value={serverURL}
                onChange={(e) => setServerURL(e.target.value)}
              />
            </div>

            <button onClick={handleSaveSetting} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </BaseModal>
    </>
  );
}
