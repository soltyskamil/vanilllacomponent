function loadData(container, data) {
  const tabsButtons = document.createElement('div')
  tabsButtons.classList.add('tabsButtons')

  data.forEach((item, index) => {
    const tabsInfo = document.createElement('button')
    tabsInfo.classList.add('tabBtn')
    tabsInfo.innerHTML = item.label

    tabsButtons.appendChild(tabsInfo)
    container.appendChild(tabsButtons)
  })
  showData(container, data)
}


function showData(container, data){
  const tabsConfig = document.createElement('div')
  tabsConfig.classList.add('tabsConfig')

  const buttons = document.querySelectorAll('.tabBtn')
  buttons[0].classList.add('active')

  buttons.forEach((item, index) => {
    if(item.classList.contains('active')){
      tabsConfig.innerHTML = data[index].info
      container.appendChild(tabsConfig)
    }
    item.addEventListener('click', (e) => switchData(e, buttons, container, data, tabsConfig))
  })

}

function switchData(e, buttons, container, data, tabsConfig){
  if(e.target.classList.contains('active')) return
  
  else {
    buttons.forEach((item) => item.classList.remove('active'))
    e.target.classList.add('active')
  }

  buttons.forEach((item, index) => {
    if(item.classList.contains('active')){
      tabsConfig.innerHTML = data[index].info
      container.appendChild(tabsConfig)
    }
  })

}



document.addEventListener('DOMContentLoaded', () =>{
  const parent = document.querySelector('#app')
 
  const container = document.createElement('div')
  container.id = 'tabsComponent'
  
  parent.appendChild(container)
  
  const data = [
    {
        label: 'Pierwsza zakładka',
        info: 'Informacje dotyczące pierwszej zakładki',
    },
    {
        label: 'Druga zakładka',
        info: 'Informacje dotyczące drugiej zakładki',
    },
    {
        label: 'Trzecia zakładka',
        info: 'Informacje dotyczące trzeciej zakładki',
    },
    {
        label: 'Czwarta zakładka',
        info: 'Informacje dotyczące czwartej zakładki',
    },
    {
        label: 'Piąta zakładka',
        info: 'Informacje dotyczące piątej zakładki',
    },
    {
        label: 'Szósta zakładka',
        info: 'Informacje dotyczące szóstej zakładki',
    },
    {
        label: 'Siódma zakładka',
        info: 'Informacje dotyczące siódmej zakładki',
    },
    {
        label: 'Ósma zakładka',
        info: 'Informacje dotyczące ósmej zakładki',
    },
    {
        label: 'Dziewiąta zakładka',
        info: 'Informacje dotyczące dziewiątej zakładki',
    },
  ];
  loadData(container, data)
}
)
