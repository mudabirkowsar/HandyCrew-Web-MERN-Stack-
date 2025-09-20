import React from "react";

function SettingsScreen() {
    return (
        <section>
            <h2>Settings</h2>
            <form className="form">
                <label>
                    Change Password
                    <input type="password" placeholder="New password" />
                </label>
                <button type="submit">Update</button>
            </form>
        </section>
    );
}

export default SettingsScreen;
