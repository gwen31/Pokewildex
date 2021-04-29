import Staff from './Staff';

const staffs = [
  {
    name: 'Anthony',
    data: {
      color: '#6FE457',
      imgUrl:
        'https://cdn.discordapp.com/attachments/829002496043122688/836549202943148079/Pokemon-antho.jpg',
    },
    age: '36 ans',
    id: 1,
  },
  {
    name: 'Chloé',
    data: {
      imgUrl: 'https://i.ibb.co/jgBvZ3M/rsz-pokechloe.jpg',
      color: '#FE92CA',
    },
    age: '24 ans',
    id: 2,
  },
  {
    name: 'Gwénaëlle',
    data: {
      imgUrl:
        'https://cdn.discordapp.com/attachments/834053825794539540/835195506597822554/inCollage_20210423_184807798.jpg',
      color: '#40A5FC',
    },
    age: '43 ans',
    id: 3,
  },
  {
    name: 'Thomas',
    data: {
      imgUrl:
        'https://media.discordapp.net/attachments/826040314674020363/837237093255610368/rsz_1pokethomas.jpg?width=422&height=451',
      color: '#606060',
    },
    age: '29 ans',
    id: 4,
  },
];

function StaffList() {
  return (
    <div className="wrap">
      {staffs.map((staff) => (
        <Staff
          key={staff.id}
          name={staff.name}
          data={staff.data}
          age={staff.age}
        />
      ))}
    </div>
  );
}

export default StaffList;
