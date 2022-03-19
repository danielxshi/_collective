import { Component } from 'react';
import ProjectMessages from '../JSON/ProjectMessages';

class IntroMessage extends Component {
  render() {
    return (
      <div>
        <ul>
          {ProjectMessages.IntroMessage.map((item, index) => {
            return (
              <div className="member--wrapper">
                <div className="loader--member-name">
                  <span>{item.Title}</span>
                </div>
                <div className="loader--member-role">
                  <span>{item.Message}</span>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default IntroMessage;
