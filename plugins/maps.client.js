export default function (context, inject) {
  let mapLoaded = false
  let mapWaiting = null
  
  addScript()
  inject('maps', {
    showMap
  })

  function addScript() {
    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBNDoadQ7D6GvTh5xCQ2ee8F1R-KsN-ij8&libraries=places&callback=initMap'
    script.async = true
    window.initMap = initMap
    document.head.appendChild(script)
  }

  function initMap() {
    mapLoaded = true
    if (mapWaiting) {
      const { canvas, lat, lng } = mapWaiting
      renderMap(canvas, lat, lng)
      mapWaiting = null
    }
  }

  function showMap(canvas, lat, lng) {
    if (mapLoaded) renderMap(canvas, lat, lng)
    else mapWaiting = { canvas, lat, lng }
  }

  function renderMap(canvas, lat, lng) {
    const options = {
      zoom: 18,
      center: new window.google.maps.LatLng(
        lat,
        lng
      ),
      disableDefaultUI: true,
      zoomControl: true
    }
    const map = new window.google.maps.Map(canvas, options)
    const position = new window.google.maps.LatLng(
      lat,
      lng
    )
    const marker = new window.google.maps.Marker({ position })
    marker.setMap(map)
  }
}
