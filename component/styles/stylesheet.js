import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  fullview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f3f0',
  },
  searchView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '10%',
    padding: 4,
    borderWidth: 1,
  },
  searchTextBox: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
    textAlign: 'center',
  },
  paginationMinus: {
    flex: 1,
    flexDirection: 'row',
  },
  dataField: {
    //backgroundColor: '#fff',
    width: '100%',
    height: '90%',
    padding: 4,
  },
  totalCount: {
    fontSize: 17,
  },
  dataFieldView: {
    borderColor: '#000',
    //   borderWidth: 2,
    padding: 5,
    alignItems: 'center',
  },
  dataScrollView: {
    width: '100%',
    textAlign: 'center',
    height: '90%',
  },
  touchableOpacityText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    height: 45,
    padding: 12,
    marginBottom: 5,
  },
  detailOpacityText: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    height: 50,
    padding: 12,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  ImageHeight: {
    width: 50,
    height: 40,
    marginTop: 10,
  },
  TextTotla: {
    width: '70%',
    height: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});
export default styles;
