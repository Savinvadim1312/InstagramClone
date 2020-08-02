import React from 'react';
import { FlatList } from 'react-native';
import Story from '../Story';

import styles from "./styles";

const data = [
  {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/p160x160/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_eui2=AeGjZbecmqwLvnlbx3STRUcixlokCBJZ6JPGWiQIElnok5b36VQxmkbd_xA74WOh5Md7TWZNOQ6TSiAdKeQf8RJ9&_nc_ohc=tq7CYqHvRYcAX_LwjFy&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=a7fda4462bbac7dcca956ac0c492e739&oe=5F40895B',
    name: 'Vadim',
  }, {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
    name: 'Lukas',
  }, {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/101550839_2558540351026011_5343458796813418496_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGStRqlzx8Ffpbfczu6NNozefIpQnTPL0R58ilCdM8vRBhOrXGeOqGETI_lhHoXCUAvSLzVs6tG1zxDAtFZn4PN&_nc_ohc=mZM1p1QdLMoAX9QVenH&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=af7355936e01064d82372f3f26f70dd8&oe=5F426FFF',
    name: 'Alex',
  }, {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/p160x160/14242257_122280314893965_2111799435851825649_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGs9jG5hGVcbB1C9N0UQqdbXduE6cDoPWBd24TpwOg9YIDqQWWxeE87hXgFYgD8aqOX8f7me8cCBfYci34GWHbE&_nc_ohc=CFFbdCcsaYwAX9V0Ybz&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=b2cef9552fdd53440485d2f799a320d3&oe=5F40C3D6',
    name: 'Danil',
  }, {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/p160x160/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_eui2=AeGjZbecmqwLvnlbx3STRUcixlokCBJZ6JPGWiQIElnok5b36VQxmkbd_xA74WOh5Md7TWZNOQ6TSiAdKeQf8RJ9&_nc_ohc=tq7CYqHvRYcAX_LwjFy&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=a7fda4462bbac7dcca956ac0c492e739&oe=5F40895B',
    name: 'Name',
  }, {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
    name: 'Lukdsaas',
  }, {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/101550839_2558540351026011_5343458796813418496_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGStRqlzx8Ffpbfczu6NNozefIpQnTPL0R58ilCdM8vRBhOrXGeOqGETI_lhHoXCUAvSLzVs6tG1zxDAtFZn4PN&_nc_ohc=mZM1p1QdLMoAX9QVenH&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=af7355936e01064d82372f3f26f70dd8&oe=5F426FFF',
    name: 'Alsaaex',
  }, {
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/p160x160/14242257_122280314893965_2111799435851825649_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGs9jG5hGVcbB1C9N0UQqdbXduE6cDoPWBd24TpwOg9YIDqQWWxeE87hXgFYgD8aqOX8f7me8cCBfYci34GWHbE&_nc_ohc=CFFbdCcsaYwAX9V0Ybz&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=b2cef9552fdd53440485d2f799a320d3&oe=5F40C3D6',
    name: 'Danaaail',
  }
]

const Stories = () => (
  <FlatList
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
  />
)

export default Stories;
