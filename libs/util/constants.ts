import { LocationInfo } from './types'

export const initialViewState = {
  // pune
  latitude: 18.5204,
  longitude: 73.8567,
  zoom: 11.5,
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'Shivajinagar, Pune, Maharashtra, India',
    latLng: [18.5303, 73.8499],
  },
  {
    placeName: 'Akurdi, Pune, Maharashtra, India',
    latLng: [18.6499, 73.7809],
  },
  {
    placeName: 'Pimpri-Chinchwad, Pune, Maharashtra, India',
    latLng: [18.6298, 73.7997],
  },
  {
    placeName: 'Talegaon Dabhade, Pune, Maharashtra, India',
    latLng: [18.7376, 73.6747],
  },
  {
    placeName: 'Hadapsar, Pune, Maharashtra, India',
    latLng: [18.5089, 73.9259],
  },
]

export const VALET_CHARGE_PER_METER = 0.005
