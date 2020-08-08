import React from 'react';
import { FlatList } from 'react-native';
import Post from "../Post";
import Stories from "../UserStoriesPreview";


const data = [
  {
    id: '1',
    user: {
      imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
      name: 'Lukas'
    },
    imageUri: 'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago'
  },
  {
    id: '2',
    user: {
      imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
      name: 'Lukas'
    },
    imageUri: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708',
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago'
  },
  {
    id: '3',
    user: {
      imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B',
      name: 'Lukas'
    },
    imageUri: 'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago'
  }
]

const Feed = () => (
  <FlatList
    data={data}
    renderItem={({item}) => <Post post={item} />}
    keyExtractor={({id}) => id}
    ListHeaderComponent={Stories}
    />
)

export default Feed;
