import React from 'react';
import AgentumIcons from 'react-native-agentum-icons/AgentumIcons';

const ICON_SET_MAP = {
  agentumicons: AgentumIcons,
};

// This is a composition is a drop in replacement for users migrating from the
// react-native-icons module. Please don't use this component for new apps/views.
export default class Icon extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    size: React.PropTypes.number,
    color: React.PropTypes.string,
  };

  setNativeProps(nativeProps) {
    if (this.iconRef) {
      this.iconRef.setNativeProps(nativeProps);
    }
  }

  iconRef = null;

  handleComponentRef = (ref) => {
    this.iconRef = ref;
  };

  render() {
    const nameParts = this.props.name.split('|');
    const setName = nameParts[0];
    const name = nameParts[1];

    const IconSet = ICON_SET_MAP[setName];
    if (!IconSet) {
      throw new Error(`Invalid icon set "${setName}"`);
    }

    return (
      <IconSet
        allowFontScaling={false}
        ref={this.handleComponentRef}
        {...this.props}
        name={name}
      />
    );
  }
}
