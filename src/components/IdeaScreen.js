import React from 'react';
import {View, Text, Image} from 'react-native';

const IdeaScreen = () =>{
    return(
        <View style={{flex:1, backgroundColor:"#171717", paddingTop:20, paddingLeft:20}}>
            <View style={{flexDirection:"row", marginTop:20}}>
             <View>
                <Image source={require('../../assets/images.jpeg')} style={{width:50, height:50, borderRadius:30}}/>
             </View>
             <View style={{justifyContent:"center", alignItems:"center"}}>
             <Text style={{color:"white", paddingLeft:20, fontSize:20, fontWeight:"bold"}}>Ariene Nguyen</Text>
             <Text style={{color:"white", paddingTop:5}}>250k followers</Text>
             </View>
             <View style={{backgroundColor:"#EE4953", marginLeft:50, width:100, height:40, borderRadius:20, justifyContent:"center", alignItems:"center"}}>
                 <Text style={{fontSize:20, color:"white"}}>Follow</Text>
             </View>
            </View>

            <View style={{paddingTop:30}}>
                <Text style={{color:"white"}}>jdn</Text>
            </View>
        </View>
    );
}

export default IdeaScreen;
