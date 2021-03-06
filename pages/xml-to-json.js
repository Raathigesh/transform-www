import React, { PureComponent } from "react";
import { xml2json } from "xml-js";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";

const text = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
`;

export default class Json2Ts extends PureComponent {
  state = {
    isCompactMode: true
  };

  getTransformedValue = newValue => {
    return xml2json(newValue, {
      compact: this.state.isCompactMode
    });
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="XML"
          getTransformedValue={this.getTransformedValue}
          name={"big-query"}
          defaultText={text}
          leftMode="html"
          rightMode="json"
          url={this.props.url}
          onCheckboxChange={(checked, cb) =>
            this.setState({ isCompactMode: checked }, cb)}
          checkboxText="Compact Mode"
          initialCheckboxValue={this.state.isCompactMode}
        />
      </Layout>
    );
  }
}
