import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
    },
    avatarSize: {
      width: 60,
      height: 60,
      borderRadius: 5,
      margin: 10,
    },
    stats:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
    },
    oneStat:{
      flexDirection:'column',
    },
    statName:{
      color:'#8c8b8b', 
      fontSize:15
    },
    row:{
      flexDirection:'row',
      flexWrap: 'wrap',
    },
    information:{
      flexDirection: 'column',
      margin: 10,
      flex: 1,
    },
    languageBox:{
      alignItems: 'stretch',
      borderRadius:5
    }
  });

const RepositoryItem = ({item}) => {

    let stars = item.stargazersCount
    let forks = item.forksCount
    let reviews = item.reviewCount
    let rating = item.ratingAverage

    if(rating>1000){
      rating = (rating/1000).toFixed(1)+"k"
      
    }

    if(reviews>1000){
      reviews = (reviews/1000).toFixed(1)+"k"
      
    }

    if(stars>1000){
        stars = (stars/1000).toFixed(1)+"k"
        
    }

    if(forks>1000){
        forks = (forks/1000).toFixed(1)+"k"
    }

    return(
    <View style={styles.container}>

      <View style={styles.row}>
        <Image
            style={styles.avatarSize}
            source={{
            uri: item.ownerAvatarUrl,
            }}/>
        <View style={styles.information}>
          <Text style = {{fontSize:19, fontWeight: 'bold', marginBottom:5}}>{item.fullName}</Text>
          <Text style = {{color:'#8c8b8b', fontSize:14, marginBottom:5}}>{item.description}</Text>
          <View style = {styles.languageBox}>
            <Text style={{alignSelf: 'flex-start',color:'#FFFFFF',backgroundColor:"#0366d6",padding:5}}>{item.language}
            </Text>
          </View>
        </View>
      </View>

      
      <View style = {styles.stats}>
          <View style = {styles.oneStat}>
            <Text style = {{textAlign:'center'}}>{stars}</Text>
            <Text style = {styles.statName}>Stars</Text>
          </View>
          <View style = {styles.oneStat}>
            <Text style = {{textAlign:'center', fontSize:15}}>{forks}</Text>
            <Text style = {styles.statName}>Forks</Text>
          </View>
          <View style = {styles.oneStat}>
            <Text style = {{textAlign:'center'}}>{reviews}</Text>
            <Text style = {styles.statName}>Reviews</Text>
          </View>
          <View style = {styles.oneStat}>
            <Text style = {{textAlign:'center'}}>{item.ratingAverage}</Text>
            <Text style = {styles.statName}>Rating</Text>
          </View>
      </View>
          
    </View>
    )
  };

  export default RepositoryItem;