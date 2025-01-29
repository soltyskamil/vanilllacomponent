// const tabsData = [
//   {
//     label: 'Oferty',
//     content: 'Telefon!!!',
//     id: 0,
//     active: true,
//   },
//   {
//     label: 'Informacje o produkcie',
//     content: 'To są informacje o produkcie',
//     id: 1,
//     active: false,
//   },
//   {
//     label: 'Opinie i recenzje',
//     content: 'Dokurwiona sprawa',
//     id: 2,
//     active: false,
//   },
//   {
//     label: 'Zadaj pytanie',
//     content: 'Pytanko pytanko',
//     id: 3,
//     active: false,
//   },
//   {
//     label: 'Kup lokalnie',
//     content: 'Kup koło chałupy',
//     id: 4,
//     active: false,
//   },
// ]
const tabs = document.querySelector('#tabsButtons')
const tabsContent = document.querySelector('#tabsContent')

// tabsData.forEach(data => {
//   const dataEl = document.createElement('button')
//   dataEl.setAttribute('data-id', data.id)
//   dataEl.innerHTML = `${data.label}`
//   tabs.appendChild(dataEl)
//   if(data.active){
//     tabsContent.innerHTML = `${data.content}`
//   }
//   else return
// })
 // tabsData.map(function(e){
    //   if(e.active && e.id != id){
      //     e.active = !e.active
      //     tabsData[id].active = !tabsData[id].active;
      //     tabsContent.innerHTML = `${tabsData[id].content}`
      //     console.log(tabsData[id], tabsData)
      //   }
      // })
/*
Wymagania techniczne:
komponent będzie można stworzyć za pomocą klasy lub funkcji np. new Tabs(container, config) lub createTabsComponent(container, config)
container to element html, do którego należy “wstrzyknąć” komponent zakładek
config to dowolny obiekt lub tablica na podstawie, której należy wygenerować komponent. Przykładowy schemat: 
const tabs = [ {label: string, content: string} ]
domyślnie aktywna jest pierwsza zakładka
komponent wyświetla się poprawnie na mobile oraz desktop
*/

/* 
  - Stworzenie elementu HTML to którego mamy wstrzyknąć zakładki
  - dodanie zakładek za pomocą tablicy z danymi
  - funkcjonalność z powyższych metod
*/
const tabData = []

function addItem(container, content){
  tabData.push({
    label: container,
    content: content,
    id: tabData.length,
    active: false,
  })
  const button = document.createElement('button')
  button.setAttribute('data-id', tabData.length - 1)
  button.innerHTML = container;
  tabData[0]['active']=true;
  tabs.insertBefore(button, button.nextSibling)
  tabsContent.innerHTML = `${tabData[0].content}`
  const buttons = document.querySelectorAll('button')
  buttons[0].style.backgroundColor = '#95a4aa'
  buttons.forEach(function(element){
    element.addEventListener('click', () => switchData(element))
  })
}

function switchData(element){
  const id = parseInt(element.getAttribute('data-id'))
  const buttons = document.querySelectorAll('button')
  tabData.map(function(e){
    if(e.active && e.id != id){
      e.active = !e.active
      tabData[id].active = !tabData[id].active;
      tabsContent.innerHTML = `${tabData[id].content}`
      console.log(e.id, id)
      buttons[e.id].style.backgroundColor = '#eef1f5'
      buttons[id].style.backgroundColor = '#95a4aa'
    }
    
  })

}