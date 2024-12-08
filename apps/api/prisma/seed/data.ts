import { generateSlots } from './util'
import { Prisma } from '@prisma/client'

export const garagesSample: Prisma.GarageCreateInput[] = [
  {
    displayName: 'Manhattan Garage 1',
    description: 'Secure parking in the heart of Manhattan',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },

    Address: {
      create: {
        address: '123 5th Ave, New York, NY 10001',
        lat: 40.712776,
        lng: -74.005974,
      },
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
  },
]

export const garages2: Prisma.GarageCreateInput[] = [
  {
    displayName: 'Brooklyn Garage 1',
    description: 'Affordable parking in Brooklyn',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-and-clean-parking-garage-in-brooklyn-new-york-the-picture-sh-825512221_kzvig6.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
      ],
    },
    Address: {
      create: {
        address: '456 Court St, Brooklyn, NY 11231',
        lat: 40.678178,
        lng: -73.944158,
      },
    },
  },
  {
    displayName: 'Queens Garage 1',
    description: 'Convenient parking in Queens',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/design-a-cover-picture-for-a-convenient-parking-garage-in-queens-new-york-the-image-should-show-a--976407210_la43y2.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '789 Queens Blvd, Queens, NY 11373',
        lat: 40.728224,
        lng: -73.794852,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 2',
    description: 'Secure parking near Central Park',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/design-a-cover-picture-for-a-convenient-parking-garage-in-queens-new-york-the-image-should-show-a--639233464_tuskex.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '101 Central Park West, New York, NY 10023',
        lat: 40.7812,
        lng: -73.9665,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 2',
    description: 'Spacious parking in Brooklyn Heights',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/design-a-cover-picture-for-a-parking-garage-in-long-island-city-queens-new-york-the-image-should--184920453_v8umyi.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '202 Atlantic Ave, Brooklyn, NY 11201',
        lat: 40.6912,
        lng: -73.9936,
      },
    },
  },
  {
    displayName: 'Queens Garage 2',
    description: 'Safe parking in Flushing',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/create-a-cover-image-of-a-spacious-parking-garage-in-brooklyn-heights-new-york-the-picture-should--539597916_obi5kl.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '303 Main St, Flushing, NY 11354',
        lat: 40.759,
        lng: -73.8303,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 3',
    description: 'Parking near Times Square',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/design-a-cover-picture-for-a-parking-garage-in-long-island-city-queens-new-york-the-image-should--110448605_bqjzmf.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '1515 Broadway, New York, NY 10036',
        lat: 40.758,
        lng: -73.9855,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 3',
    description: 'Secure parking in Williamsburg',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/render-a-cover-picture-of-a-secure-parking-garage-near-central-park-in-manhattan-new-york-the-imag-736153979_kvpczt.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '404 Bedford Ave, Brooklyn, NY 11249',
        lat: 40.7081,
        lng: -73.9571,
      },
    },
  },
  {
    displayName: 'Queens Garage 3',
    description: 'Affordable parking in Astoria',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/create-a-cover-image-of-an-affordable-clean-outdoor-parking-garage-in-brooklyn-new-york-the-pict-620611113_ortr3g.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '505 Steinway St, Astoria, NY 11103',
        lat: 40.7592,
        lng: -73.9196,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 4',
    description: 'Parking near Wall Street',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158769/autospace/busy-parking-garage-with-slots-in-newyork-neon-ambiance-abstract-black-oil-gear-mecha-detailed-a_fy51wa.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '75 Wall St, New York, NY 10005',
        lat: 40.7074,
        lng: -74.0104,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 4',
    description: 'Parking near Prospect Park',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-showing-newyork-skyline-haze-ultra-detail_n1hhhz.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '606 Flatbush Ave, Brooklyn, NY 11225',
        lat: 40.6591,
        lng: -73.9626,
      },
    },
  },
  {
    displayName: 'Queens Garage 4',
    description: 'Parking near LaGuardia Airport',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-car-parking-garage-with-slots-wide-angle-haze-ultra-detailed-film-photogr_kst6l1.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '707 Ditmars Blvd, Queens, NY 11370',
        lat: 40.7743,
        lng: -73.8896,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 5',
    description: 'Secure parking in the East Village',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/busy-parking-garage-near-a-newyork-central-park-acrylic-painting-trending-on-pixiv-fanbox-palette-790070610_pptabc.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '808 E 14th St, New York, NY 10009',
        lat: 40.7295,
        lng: -73.9786,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 5',
    description: 'Parking in Greenpoint',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-wide-angle-haze-ultra-detailed-film-phot_ywuzvl.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '909 Manhattan Ave, Brooklyn, NY 11222',
        lat: 40.7291,
        lng: -73.9542,
      },
    },
  },
  {
    displayName: 'Queens Garage 5',
    description: 'Convenient parking in Forest Hills',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometri_lai3r3.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '1001 Austin St, Forest Hills, NY 11375',
        lat: 40.7207,
        lng: -73.8448,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 6',
    description: 'Parking in Soho',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-modern-techno-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometric-art_rfgxgp.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    Address: {
      create: {
        address: '1101 Broadway, New York, NY 10012',
        lat: 40.7223,
        lng: -73.9987,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 6',
    description: 'Parking in DUMBO',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/busy-parking-garage-with-slots-in-newyork-in-the-hudson-river-low-poly-isometric-art-3d-art-high_os8c09.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    Address: {
      create: {
        address: '1202 Water St, Brooklyn, NY 11201',
        lat: 40.7033,
        lng: -73.9903,
      },
    },
  },
  {
    displayName: 'Queens Garage 6',
    description: 'Parking in Jamaica',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-modern-techno-parking-garage-with-slots-showing-newyork-skyline-with-no-cars-low-poly-i_ikyidk.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '1303 Jamaica Ave, Jamaica, NY 11432',
        lat: 40.7028,
        lng: -73.7925,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 7',
    description: 'Parking near the UN Headquarters',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/busy-parking-garage-with-slots-in-newyork-outer-space-vanishing-point-super-highway-high-speed-_wnpn6u.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '1401 1st Ave, New York, NY 10016',
        lat: 40.7489,
        lng: -73.968,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 7',
    description: 'Parking in Park Slope',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158766/autospace/busy-parking-garage-near-a-newyork-central-park-acrylic-painting-trending-on-pixiv-fanbox-palette_buv6ks.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '1504 7th Ave, Brooklyn, NY 11215',
        lat: 40.6681,
        lng: -73.9822,
      },
    },
  },
  {
    displayName: 'Queens Garage 7',
    description: 'Parking in Long Island City',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158766/autospace/multistorey-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometric-art-3d-art-hig_1_pbgzgi.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    Address: {
      create: {
        address: '1605 Jackson Ave, Long Island City, NY 11101',
        lat: 40.7472,
        lng: -73.9438,
      },
    },
  },
]

export const garages: Prisma.GarageCreateInput[] = [
  {
    displayName: 'Shree Ganesh Parking',
    description: 'Safe and secure parking near Koregaon Park',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: '7th Main Rd, Koregaon Park, Pune, India 411001',
        lat: 18.529318,
        lng: 73.826177,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
      ],
    },
  },
  {
    displayName: 'Balaji Parking',
    description: 'Convenient parking near PCMC Bhavan',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Aundh Road, Pimpri Chinchwad, Pune, India 411028',
        lat: 18.560613,
        lng: 73.780068,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
        ...generateSlots({ type: 'BICYCLE' }),
      ],
    },
  },
  {
    displayName: 'Om Parking',
    description: 'Affordable parking near Kothrud',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Karve Road, Kothrud, Pune, India 411038',
        lat: 18.514936,
        lng: 73.814906,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'HEAVY' }),
        ...generateSlots({ type: 'BICYCLE' }),
        ...generateSlots({ type: 'BIKE' }),
      ],
    },
  },
  {
    displayName: 'Sai Parking',
    description: 'Secure parking near Hinjewadi IT Park',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Hinjewadi IT Park, Pune, India 411057',
        lat: 18.616729,
        lng: 73.769669,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
      ],
    },
  },
  {
    displayName: 'Ganpati Parking',
    description: 'Spacious parking near Viman Nagar',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Viman Nagar, Pune, India 411014',
        lat: 18.550295,
        lng: 73.887298,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'HEAVY' }),
      ],
    },
  },
  {
    displayName: 'Laxmi Parking',
    description: 'Secure parking near MG Road',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'MG Road, Pune, India 411001',
        lat: 18.51961,
        lng: 73.855439,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
        ...generateSlots({ type: 'BICYCLE' }),
      ],
    },
  },
  {
    displayName: 'Krishna Parking',
    description: 'Affordable parking near Kondhwa',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Kondhwa, Pune, India 411048',
        lat: 18.493869,
        lng: 73.886059,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'HEAVY' }),
      ],
    },
  },
  {
    displayName: 'Tata Steel Parking',
    description: 'Secure parking near Tata Steel Plant',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Main Road, Bistupur, Jamshedpur, Jharkhand',
        lat: 22.8018,
        lng: 86.1872,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
      ],
    },
  },
  {
    displayName: 'Jubilee Park Parking',
    description: 'Convenient parking near Jubilee Park',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Jubilee Park Road, Sakchi, Jamshedpur, Jharkhand',
        lat: 22.7997,
        lng: 86.1922,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
        ...generateSlots({ type: 'BICYCLE' }),
      ],
    },
  },
  {
    displayName: 'CIDCO Parking',
    description: 'Affordable parking near CIDCO',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'CIDCO Colony, Jamshedpur, Jharkhand',
        lat: 22.8032,
        lng: 86.1958,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'HEAVY' }),
        ...generateSlots({ type: 'BICYCLE' }),
      ],
    },
  },
  {
    displayName: 'Sakchi Parking',
    description: 'Secure parking near Sakchi',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Station Road, Sakchi, Jamshedpur, Jharkhand',
        lat: 22.8051,
        lng: 86.1897,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
      ],
    },
  },
  {
    displayName: 'Sonari Parking',
    description: 'Spacious parking near Sonari',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Sonari Main Road, Jamshedpur, Jharkhand',
        lat: 22.8072,
        lng: 86.1831,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'HEAVY' }),
      ],
    },
  },
  {
    displayName: 'Bistupur Parking',
    description: 'Convenient parking near Bistupur',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Jubilee Park Road, Bistupur, Jamshedpur, Jharkhand',
        lat: 22.7985,
        lng: 86.1912,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'BIKE' }),
        ...generateSlots({ type: 'BICYCLE' }),
      ],
    },
  },
  {
    displayName: 'Adityapur Parking',
    description: 'Affordable parking near Adityapur',
    Company: {
      connect: {
        id: 1,
      },
    },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },
    Address: {
      create: {
        address: 'Adityapur Industrial Area, Jamshedpur, Jharkhand',
        lat: 22.8123,
        lng: 86.2015,
      },
    },
    Slots: {
      create: [
        ...generateSlots({ type: 'CAR' }),
        ...generateSlots({ type: 'HEAVY' }),
        ...generateSlots({ type: 'BICYCLE' }),
      ],
    },
  },
]
