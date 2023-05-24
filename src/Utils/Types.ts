export type User = {
  id: number,
  email: string,
  user_type: string,
  first_name: string,
  last_name: string,
  middle_name: string,
  coin_balance: number,
  phone_number: string,
  group: any,
  is_staff: boolean,
}

export type News = {
  id: number,
  title: string,
  content: string,
  date_created: string,
  coin_reward: number,
  image: string | null,
  author: User,
  faculty: {
    id: number,
    name: string,
  }
}

export type Department = {
  id: number,
  name: string,
  faculty: {
    id: number,
    name: string,
  },
}

export type Group = {
  id: number,
  name: string,
  department: Department,
}
