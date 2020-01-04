import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
const window = Dimensions.get('window');
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


export default class Header extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render(){
    let props = this.props
        return(
     <View style={[styles.appBar,{ backgroundColor: this.props.headerColor,}]} >
      <View style = {{flex:1,flexDirection:'row', width:window.width, marginTop:7}}>
        <TouchableOpacity style={{height :20,width :20,marginTop :12 ,marginLeft: 15}}
         onPress={() => this.props.navigation.goBack()}>
          <Image style={{height :18,width :18}}
                source={props.backImagePath} />
          </TouchableOpacity>
      {props.showHeaderImage== true && (
                    <Image style = {{marginTop:6,height:30,width:30,marginLeft:5}}
                           source={props.headerImagePath}/>
        )}
        {props.showHeaderImage==false && (
          <View/>
          )}
      {props.headerName=='' &&(
      <Text style={{height:1}}/>
      )}
      {props.headerName!='' && (
      <Text style = {[styles.headerText,{...this.props.headerTextStyle}]}>
      {props.headerName}
      </Text>
      )}
       </View>
     </View>

        )
    }
}
const styles = StyleSheet.create({
 appBar: {
   height: APPBAR_HEIGHT,
 },
 headerText:{
  color:'black',
  width : '80%',
  backgroundColor:'transparent',
  height:40,
  marginLeft :10 ,
  marginTop :8,
  fontSize: 17,
  fontFamily:'BreeSerif-Regular'
 }

})
