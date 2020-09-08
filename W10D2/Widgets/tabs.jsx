import React from 'react';



class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tab: 0 };
    this.pickTab = this.pickTab.bind(this);
  }

  pickTab(number) {
    this.setState( {tab: number} );
  }

  render() {
    //   const list = this.props.tabs
      return (
          <div>
            <ul className="tabs">
              {this.props.tabs.map((ele, index) => {
                return <button key={index} onClick={() => { this.pickTab(index)}}>{ele["title"]}</button>
              })}
            </ul>
            
              {/* // <button onClick={() => {this.pickTab(0)}}>{this.props.tabs[0]["title"]}</button>
              // <button onClick={() => {this.pickTab(1)}}>{this.props.tabs[1]["title"]}</button>
              // <button onClick={() => {this.pickTab(2)}}>{this.props.tabs[2]["title"]}</button>
              // <button onClick={() => {this.pickTab(3)}}>{this.props.tabs[3]["title"]}</button>
                */}
              <article className="content">{this.props.tabs[this.state.tab]["content"]}</article> 

          </div>
      )
  }
}


export default Tabs;