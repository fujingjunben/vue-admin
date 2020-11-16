/**
 * 所有数据从该类获取，包括假数据，方便接入服务器接口
 */
class Api {
    getMenuList(){
        return [
        {
          id: '1',
          name: 'option1',
          icon: 'pie-chart',
        },
        {
          id: '2',
          name: 'option2',
          icon: 'desktop',
        },
        {
          id: '3',
          name: 'option3',
          icon: 'inbox',
        },
        {
          id: '4',
          name: 'Navigation One',
          icon: 'mail',
          children: [
            {
              id: '41',
              name: 'option5',
              icon: 'mail'
            },
            {
              id: '42',
              name: 'option6',
              icon: 'mail'
            }
          ]
        },
        {
          id: '5',
          name: 'Navigation Two',
          icon: 'appstore',
          children: [
            {
              id: '51',
              name: 'option7',
              icon: 'appstore'
            },
            {
              id: '52',
              name: 'option8',
              icon: 'appstore'
            }
          ]
        },
      ]
    }
}

export default new Api()