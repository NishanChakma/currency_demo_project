import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles/stylesheet';
import {connect} from 'react-redux';

class DataDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Symbol: '',
      Description: '',
      Digits: '',
      Ask: '',
      Bid: '',
      change: '',
      changOneday: '',
    };
  }
  static navigationOptions = {
    title: 'Details',
  };
  componentDidMount() {
    if(this.props.Posts.length > 0){
      this.setState({
        Symbol: this.props.Posts[0].symbol,
        Description: this.props.Posts[1],
        Digits: this.props.Posts[0].digits,
        Ask: this.props.Posts[0].ask,
        Bid: this.props.Posts[0].bid,
        Change: this.props.Posts[0].change,
        ChangOneday: this.props.Posts[0].ChangOneday,
      });
    }
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.fullview}>
          <Text style={styles.detailOpacityText}>
            Symbol: {this.state.Symbol}
          </Text>
          <Text style={styles.detailOpacityText}>
            Description: {this.state.Description}
          </Text>
          <Text style={styles.detailOpacityText}>
            Digits: {this.state.Digits}
          </Text>
          <Text style={styles.detailOpacityText}>Ask: {this.state.Ask}</Text>
          <Text style={styles.detailOpacityText}>Bid: {this.state.Bid}</Text>
          <Text style={styles.detailOpacityText}>
            Change: {this.state.Change}
          </Text>
          <Text style={styles.detailOpacityText}>
            Change 24h: {this.state.ChangOneday}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  Posts: state.posts.data,
});

export default connect(mapStateToProps)(DataDetails);