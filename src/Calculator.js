import React, { Component } from 'react';
import { View, Text, FlatList} from 'react-native';
import { Dropdown } from "react-native-material-dropdown";
import PlanList from './data/rbs_plan.json';
const word = PlanList;

class Calculator extends Component {
   constructor(props) {
      super(props);
  
        this.state = ({
          categoryList:[]
        }); 
        getdata = this.getdata.bind(this);
    }  
  
  
    componentWillMount(){
      this.getdata();
    }
    
    getdata() {
       debugger;
      var temp = [];
        if(word){
          var len = word.length;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              var data = word[i];
              var joined = { value: data };
              temp.push(joined);
              
            }
          }
          this.setState({
            categoryList: temp  
          });
        }        
    }
  render() {
   debugger;
    return (
        <View style={{ flexDirection: 'column'}}>
           <Text >
             Plan List
           </Text>
           <FlatList
             data={PlanList}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
                <View >
                 <Text>{item.PlanId}.{item.PlanName}</Text>
                </View>
             }
             keyExtractor={(item, index) => index.toString()}
           />
         <Text style={{padding:10}}>
             Dropdown of Plan List
         </Text>
       <View>
       <Dropdown label="Main Category" value={this.state.categoryList} />
      </View>
        </View>
     );

  }

}

export default Calculator;
