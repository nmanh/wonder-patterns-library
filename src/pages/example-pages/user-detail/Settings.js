import React from 'react';

class Settings extends React.Component {
  render() {
    return (
      <div>
        <h3 className="mtlg mblg mrmd">Settings</h3>

        <div className="panel mblg">
          <div className="panel__heading">Accounts</div>
          <div className="panel__body">
            ....
          </div>
        </div>

        <div className="panel mblg">
          <div className="panel__heading">Privacy</div>
          <div className="panel__body">
            ....
          </div>
        </div>

        <div className="panel mblg">
          <div className="panel__heading">Email & Notifications</div>
          <div className="panel__body">
            ....
          </div>
        </div>

        <div className="panel mblg">
          <div className="panel__heading">Language</div>
          <div className="panel__body">
            ....
          </div>
        </div>
      </div>
    )
  }
}

export default Settings;
