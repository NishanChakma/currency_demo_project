import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Search from 'react-native-search-box';
import styles from './styles/stylesheet';
import {connect} from 'react-redux';
import {apiData} from '../actions/postactions';

class Main extends Component {
  constructor(props) {
    console.log('okokoaksdokoas');
    super(props);
    this.state = {
      allData: [],
      loaded: false,
      CountPagination: 0,
      reserveData: [],
    };
  }

  load_data = async () => {
    fetch('https://quotes.instaforex.com/api/quotesList')
      .then(response => response.json())
      .then(i => {
        this.setState({
          allData: i.quotesList,
          loaded: true,
          reserveData: i.quotesList,
        });
      });
  };

  componentDidMount() {
    this.load_data();
  }
  //pagination
  Paginationup = val => {
    let CountPagination = this.state.CountPagination;
    const T_length = this.state.allData.length;
    if (val == 'plus') {
      if (CountPagination + 10 <= T_length) {
        this.setState({
          CountPagination: CountPagination + 10,
        });
      }
    } else {
      if (CountPagination > 0) {
        this.setState({
          CountPagination: CountPagination - 10,
        });
      }
    }
  };

  // description data
  quetesDescription = (currency, description) => {
    if (currency.length > 0) {
      this.props.apiData(currency, description);
      this.props.navigation.navigate('Details')
    }
  };

  //search cancell
  onCancel = data => {
    this.setState({
      allData: data,
      CountPagination: 0,
    });
  };
  // search
  onChangeText = searchText => {
    const fixData = this.state.reserveData;
    this.setState({allData: fixData, CountPagination: 0});
    if (searchText) {
      let str = searchText;
      let res = str.toUpperCase();
      let findObject = [];
      let newData = this.state.allData;
      let count = 0;
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].symbol.includes(res)) {
          findObject[count] = newData[i];
          count++;
        }
      }
      this.setState({allData: findObject});
    } else {
      this.onCancel(this.state.reserveData);
    }
  };

  //show data on homepage
  reloaded_data = (e, key) => {
    if (e.symbol.length > 0) {
      return (
        <View key={key}>
          <TouchableOpacity
            onPress={() => this.quetesDescription(e.symbol, e.description)}>
            <Text style={styles.touchableOpacityText}>{e.symbol}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    let newArray;
    if (this.state.loaded == true) {
      const data = this.state.allData;
      let Input = this.state.CountPagination;
      let output = Input + 10;
      let newData = [];
      for (let i = Input; i < data.length; i += output) {
        let j = i % output;
        while (j < output) {
          if (data[j] == undefined) {
            let blank = {
              description: ' ',
              digits: '',
              symbol: '',
              trade: '',
              type: '',
            };
            newData.push(blank);
          } else {
            newData.push(data[j]);
          }
          j++;
        }
        break;
      }
      newArray = newData.map((e, key) => {
        return this.reloaded_data(e, key);
      });
    }
    const view1 = (
      <View style={styles.fullview}>
        <View>
          <Search
            ref="search_box"
            afterDelete={() => {
              this.onCancel(this.state.reserveData);
            }}
            onCancel={() => {
              this.onCancel(this.state.reserveData);
            }}
            onChangeText={searchText => {
              this.onChangeText(searchText);
            }}
          />
        </View>
        <View style={styles.dataField}>
          <View style={styles.dataFieldView}>
            <ScrollView style={styles.dataScrollView}>{newArray}</ScrollView>
          </View>
          <View style={styles.paginationMinus}>
            <View style={{width: '15%', height: '100%'}}>
              <TouchableOpacity onPress={() => this.Paginationup('minus')}>
                <Image
                  style={styles.ImageHeight}
                  source={require('./images/back_icon.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.TextTotla}>
              <Text style={styles.totalCount}>
                {this.state.CountPagination} of {this.state.allData.length}
              </Text>
            </View>
            <View style={{width: '15%', height: '100%'}}>
              <TouchableOpacity onPress={() => this.Paginationup('plus')}>
                <Image
                  style={styles.ImageHeight}
                  source={require('./images/up_icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
    const view2 = (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#1e1e2f" />
      </View>
    );
    return this.state.loaded ? view1 : view2;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.data,
});

export default connect(mapStateToProps, {apiData})(Main);
