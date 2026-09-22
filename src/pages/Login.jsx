import { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";
import BaseModal from "../components/BaseModal";

export default function Login() {
  const [settings, setSettings] = useStorage("settings");
  const [sohwConfig, setShowConfig] = useState(false);
  const [serverURL, setServerURL] = useState("http://");

  useEffect(() => {
    if (!settings) {
      setShowConfig(true);
    }
  }, [settings]);

  const handleSaveSetting = () => {
    setSettings({ ...settings, serverURL });
    setShowConfig(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
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
