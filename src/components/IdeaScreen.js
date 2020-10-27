import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const influencerList = [{"id":"0", "picture":require('../../assets/images.jpeg')}, {"id":"1", "picture":require('../../assets/im1.jpeg')}, {"id":"2", "picture":require('../../assets/im2.jpeg')},
{"id":"3", "picture":require('../../assets/im3.jpeg')}, {"id":"4", "picture":require('../../assets/im4.jpeg')}]

const IdeaScreen = () =>{

    const[influencers, setInfluencers] = useState(influencerList);
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
                <Text style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali</Text>
            </View>
            
            <View>
            <ScrollView horizontal={true}>
              {influencers && influencers.map((influencer=>{
                   return(
                 <View>
                <View style={{paddingTop:20, marginLeft:5}}>
                 <Image source={influencer.picture} style={{width:60, height:60, borderRadius:10}}/>
                 </View>
                 </View> 
                   )
             }))}   
               
               </ScrollView>
            </View>
           
            <View style={{flexDirection:"row", marginTop:45}}>
             <View>
                <Image source={require('../../assets/images.jpeg')} style={{width:50, height:50, borderRadius:30}}/>
             </View>
             <View style={{justifyContent:"center", alignItems:"center"}}>
             <Text style={{color:"white", paddingLeft:20, fontSize:20, fontWeight:"bold"}}>Ariene Nguyen</Text>
             <Text style={{color:"white", paddingTop:5}}>250k followers</Text>
             </View>
             <View style={{backgroundColor:"#EE4953", marginLeft:50, width:100, height:40, borderRadius:20, justifyContent:"center", alignItems:"center"}}>
                 <Text style={{fontSize:20, color:"white"}}>Following</Text>
             </View>
            </View>

            <View style={{paddingTop:35}}>
                <Text style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali</Text>
            </View>

            <View>
            <ScrollView horizontal={true}>
            {influencers && influencers.map((influencer=>{
                   return(
                 <View>
                <View style={{paddingTop:35, marginLeft:5}}>
                 <Image source={influencer.picture} style={{width:60, height:60, borderRadius:10}}/>
                 </View>
                 </View> 
                   )
             }))}   
               
            </ScrollView>
            </View>
            
        </View>
    );
}

export default IdeaScreen;
