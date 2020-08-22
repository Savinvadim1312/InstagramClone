mutation user1 {
  createUser(input: {name: "Vadim", image: "https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/p160x160/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_eui2=AeGjZbecmqwLvnlbx3STRUcixlokCBJZ6JPGWiQIElnok5b36VQxmkbd_xA74WOh5Md7TWZNOQ6TSiAdKeQf8RJ9&_nc_ohc=tq7CYqHvRYcAX_LwjFy&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=a7fda4462bbac7dcca956ac0c492e739&oe=5F40895B"}) {
    id
    name
  }
}

mutation user2 {
  createUser(input: {name: "Alex", image: "https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeGuvh6y7JdJyQ_sgjEaph-zDfw2T_M-BQMN_DZP8z4FA3OG-Qkjoajvba83y0-f60PUHDPn7-GUA0e8jDoxYkRC&_nc_ohc=mmDFGHC1nLAAX8ojlCt&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=4c8509718f3e6e49cd6cf9eb163eb3fc&oe=5F42657B"}) {
    id
    name
  }
}

mutation user3 {
  createUser(input: {name: "Lukas", image: "https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p160x160/101550839_2558540351026011_5343458796813418496_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGStRqlzx8Ffpbfczu6NNozefIpQnTPL0R58ilCdM8vRBhOrXGeOqGETI_lhHoXCUAvSLzVs6tG1zxDAtFZn4PN&_nc_ohc=mZM1p1QdLMoAX9QVenH&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=af7355936e01064d82372f3f26f70dd8&oe=5F426FFF"}) {
    id
    name
  }
}

mutation user4 {
  createUser(input: {name: "Danil", image: "https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/p160x160/14242257_122280314893965_2111799435851825649_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGs9jG5hGVcbB1C9N0UQqdbXduE6cDoPWBd24TpwOg9YIDqQWWxeE87hXgFYgD8aqOX8f7me8cCBfYci34GWHbE&_nc_ohc=CFFbdCcsaYwAX9V0Ybz&_nc_ht=scontent.fkiv3-1.fna&_nc_tp=6&oh=b2cef9552fdd53440485d2f799a320d3&oe=5F40C3D6"}) {
    id
    name
  }
}

mutation post1 {
  createPost(input: {userID: "",likes: 0,caption: "Hey there", image: "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story1 {
  createStory(input: {userID: "", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}) {
    id
    image
    user {
      name
    }
  }
}

mutation post2 {
  createPost(input: {userID: "",likes: 12,caption: "Check this out", image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story2 {
  createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
    id
    image
    user {
      name
    }
  }
}

mutation post3 {
  createPost(input: {userID: "", likes: 10,caption: "Like4Likes", image: "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story3 {
  createStory(input: {userID: "", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}) {
    id
    image
    user {
      name
    }
  }
}

mutation post4 {
  createPost(input: {userID: "",likes: 40, caption: "isn't this awesome", image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story4 {
  createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
    id
    image
    user {
      name
    }
  }
}

query listPosts {
  listPosts {
    items {
      caption
      createdAt
      id
      image
      user {
        id
        image
        name
      }
    }
  }
}

query listStorys {
  listStorys {
    items {
      createdAt
      id
      image
      user {
        id
        image
        name
      }
    }
  }
}
