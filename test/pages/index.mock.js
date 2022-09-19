import Index from '../.././pages/index'
import { StateContext } from '../../context/StateContext'
import { navData, subCategoryData } from '../../components/NavBar/NavBar.mock'

export const heroBanner = [
  {
    _createdAt: '2022-05-09T04:21:11Z',
    _id: 'a707f0da-8187-4ce3-9291-60d0d5692cd2',
    _rev: '4bvv2M90RuF99SvVHZ7wPE',
    _type: 'heroBanner',
    _updatedAt: '2022-05-10T04:47:19Z',
    aboveTagline: 'Since 1642',
    bgImageDesktop: {
      _type: 'image',
      asset: {
        _ref: 'image-aa56af6650fe8d9fe4e82c2808e49d51b12dc7e1-5184x3456-jpg',
        _type: 'reference',
      },
    },
    bgImageMobile: {
      _type: 'image',
      asset: {
        _ref: 'image-d5247f3e5cd1f038c3dc70088b447e11de723e1f-3597x5444-jpg',
        _type: 'reference',
      },
    },
    tagline: 'Trinkets Fit For a Witch',
  },
]

export const products = [
  {
    _createdAt: '2022-04-27T22:18:19Z',
    _id: '2b295418-a149-414d-bc73-ab6be5648f61',
    _rev: 'mS4B3BB5OZSuYJ2tznP1Qe',
    _type: 'product',
    _updatedAt: '2022-05-10T04:06:39Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: '3368a1a3987c',
        _type: 'image',
        asset: {
          _ref: 'image-b707bb2a6fde184a9b7dda00c76b8247a7922e21-3024x4032-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'baea9058103b',
        _type: 'image',
        asset: {
          _ref: 'image-7e8945474cdfe61748315735672521c2c15a69c0-5304x7952-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '238442a10d15',
        _type: 'image',
        asset: {
          _ref: 'image-50cb7c64dc30ceecabe913d31f105af14551695a-3648x5472-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '3dc234f31856',
        _type: 'image',
        asset: {
          _ref: 'image-2595f19632d3c7c68bc9ad5064e8cfc7e0d96e3a-4163x6244-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Incense',
    price: 5,
    slug: { _type: 'slug', current: 'incense' },
  },
  {
    _createdAt: '2022-05-10T00:21:00Z',
    _id: '39c6ba06-7ba0-418a-85ef-29e8246b7486',
    _rev: 'dbTx7Zg3RHkVbMMwyOsplp',
    _type: 'product',
    _updatedAt: '2022-05-10T00:34:01Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'f789b2e19736',
        _type: 'image',
        asset: {
          _ref: 'image-157e95dc85024bc1d3efafb0ddac43eb9609e15d-6449x4705-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '3206adcfeaab',
        _type: 'image',
        asset: {
          _ref: 'image-6809c6ea411bee2d87152c5376f4ec654acd4551-3017x3964-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Wall Decor',
    price: 149,
    slug: { _type: 'slug', current: 'wall-decor' },
  },
  {
    _createdAt: '2022-05-10T00:17:00Z',
    _id: '55a4b7f8-1e2f-480c-94d4-b717838fde61',
    _rev: '4bvv2M90RuF99SvVHYiYRH',
    _type: 'product',
    _updatedAt: '2022-05-10T00:17:51Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'f629cc413786',
        _type: 'image',
        asset: {
          _ref: 'image-df2aac3e6c7b3599fb7c3fe5424c6ede2bc679e1-3404x2723-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'ce6fe421f107',
        _type: 'image',
        asset: {
          _ref: 'image-1511d61ebb404874dc8cf9b6af70c082298a47fd-3840x3840-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '80327b811f80',
        _type: 'image',
        asset: {
          _ref: 'image-a66ab9fbd6c742af1a877960e9497d1f5531d4c1-2448x3264-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Runes',
    price: 95,
    slug: { _type: 'slug', current: 'runes' },
  },
  {
    _createdAt: '2022-05-10T00:11:37Z',
    _id: '6f71ecf0-c723-411c-9d8e-30db11187c88',
    _rev: 'mS4B3BB5OZSuYJ2tznO0w1',
    _type: 'product',
    _updatedAt: '2022-05-10T03:55:07Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\n\nlorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: '61c582b2a833',
        _type: 'image',
        asset: {
          _ref: 'image-622035385c8f3ebf1c9938aa7812ccc271bff564-5472x3648-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '3439626e8226',
        _type: 'image',
        asset: {
          _ref: 'image-dd222f6bf0a65421f0d492b10768337100dd6a9c-5229x3486-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'cac1a5bc7915',
        _type: 'image',
        asset: {
          _ref: 'image-b37ffdba15e7e93a326c4c39ec0380f28e3e8292-3452x4286-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Ointments',
    price: 35,
    slug: { _type: 'slug', current: 'ointments' },
  },
  {
    _createdAt: '2022-05-10T00:19:05Z',
    _id: '73d8c771-e208-4d50-8391-b83e4927209d',
    _rev: 'dbTx7Zg3RHkVbMMwyOsHdf',
    _type: 'product',
    _updatedAt: '2022-05-10T00:19:05Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \nlorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: '5cd491b428f7',
        _type: 'image',
        asset: {
          _ref: 'image-b1637ced94439dafa7de17b0456229483bfb721e-5077x3384-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '76f5d10b0475',
        _type: 'image',
        asset: {
          _ref: 'image-8b3e2afb8895af66358c6bf17533afad2793ce07-3264x4896-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '8e9438f9cdba',
        _type: 'image',
        asset: {
          _ref: 'image-4698148879ea907673745d963203cb3713649442-3355x2236-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Shelves',
    price: 120,
    slug: { _type: 'slug', current: 'shelves' },
  },
  {
    _createdAt: '2022-05-10T00:24:08Z',
    _id: '810aad14-ff86-45fe-bcc1-b50c2399c280',
    _rev: 'dbTx7Zg3RHkVbMMwyP6Q7K',
    _type: 'product',
    _updatedAt: '2022-05-10T04:05:19Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: '823fd47af3dd',
        _type: 'image',
        asset: {
          _ref: 'image-66370e54bd56f32cc35471c53d40119c06d87c9c-3456x5184-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '01799b01ae95',
        _type: 'image',
        asset: {
          _ref: 'image-ac1f6e0b64f2ded2aff15f0fe2edad2c358ddebf-3176x2541-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Witch Jewelry',
    price: 280,
    slug: { _type: 'slug', current: 'witch-jewelry' },
  },
  {
    _createdAt: '2022-05-10T00:49:58Z',
    _id: 'a1fcef7f-d3f2-436f-87c6-67fadd49357d',
    _rev: 'dbTx7Zg3RHkVbMMwyOufZU',
    _type: 'product',
    _updatedAt: '2022-05-10T00:49:58Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc   lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: '1874cd760454',
        _type: 'image',
        asset: {
          _ref: 'image-ac1f6e0b64f2ded2aff15f0fe2edad2c358ddebf-3176x2541-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '17f9cf0e2033',
        _type: 'image',
        asset: {
          _ref: 'image-56d3f6b487708b154d2ef0f0e9b726a2184b9b65-6000x4000-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '61b372e3829c',
        _type: 'image',
        asset: {
          _ref: 'image-52bf6ed39d96ec1887911abf9baa9ee1ce63c103-8048x10732-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Crystals',
    price: 25,
    slug: { _type: 'slug', current: 'crystals' },
  },
  {
    _createdAt: '2022-05-10T00:13:54Z',
    _id: 'a8757654-9c5e-40fe-a991-16ce01342028',
    _rev: '4bvv2M90RuF99SvVHZ5lWd',
    _type: 'product',
    _updatedAt: '2022-05-10T04:39:29Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc \nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'bc3d5524d3e6',
        _type: 'image',
        asset: {
          _ref: 'image-765beabd5b9e5126717357975ceefd03a9c704b3-3648x3648-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '28769ffae048',
        _type: 'image',
        asset: {
          _ref: 'image-52bf6ed39d96ec1887911abf9baa9ee1ce63c103-8048x10732-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '18451cd1a901',
        _type: 'image',
        asset: {
          _ref: 'image-26efde24937b9630136e2c60a4a9e61c0d4db05d-3798x5697-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'ea100f52cd4a',
        _type: 'image',
        asset: {
          _ref: 'image-52bf6ed39d96ec1887911abf9baa9ee1ce63c103-8048x10732-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Tarot Cards',
    price: 45,
    slug: { _type: 'slug', current: 'tarot-cards' },
  },
  {
    _createdAt: '2022-05-10T00:21:52Z',
    _id: 'b4ab86fe-2338-4263-8eb7-6a88e150a91a',
    _rev: '4bvv2M90RuF99SvVHYjq69',
    _type: 'product',
    _updatedAt: '2022-05-10T00:40:45Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'a432b3fedc56',
        _type: 'image',
        asset: {
          _ref: 'image-32b66ff365aad31c50252471a1224b95236da829-5294x3529-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '97bb0647a966',
        _type: 'image',
        asset: {
          _ref: 'image-a9b891f86ae287e6a82a7479948f807a041f2af3-3072x2048-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Books',
    price: 9,
    slug: { _type: 'slug', current: 'books' },
  },
  {
    _createdAt: '2022-04-27T22:17:45Z',
    _id: 'd3192b79-795d-4ddc-980e-62659503e0f6',
    _rev: '4bvv2M90RuF99SvVHYgxvG',
    _type: 'product',
    _updatedAt: '2022-05-10T00:06:20Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: '8f044ab1914a',
        _type: 'image',
        asset: {
          _ref: 'image-86dc91866dc40a75cd862b21f526117bac380e25-5568x3712-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'ef277172bfd4',
        _type: 'image',
        asset: {
          _ref: 'image-027e76400eea35e0eb088d49593d5fd0badeeb30-4016x6016-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'c525eb3a9cef',
        _type: 'image',
        asset: {
          _ref: 'image-0167744faa6c22317812cceac45317c6a4ef6640-3456x5184-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Inks',
    price: 15,
    slug: { _type: 'slug', current: 'inks' },
  },
  {
    _createdAt: '2022-05-10T00:15:54Z',
    _id: 'd43a46c6-bc0a-4ef2-9722-9c333c119d6a',
    _rev: 'dbTx7Zg3RHkVbMMwyP9B5p',
    _type: 'product',
    _updatedAt: '2022-05-10T04:51:44Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \nlorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'e187708ae863',
        _type: 'image',
        asset: {
          _ref: 'image-73095d9f7b8226a50e075d8ba3174c0f1238bb95-3024x4032-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '69f6028300c4',
        _type: 'image',
        asset: {
          _ref: 'image-a6ad216d73172b0f819255fac73f3e6e87e5d917-4909x3273-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'ea7d93fac02b',
        _type: 'image',
        asset: {
          _ref: 'image-64caccbf04442402a514ed61ea98a394e778cd2c-6000x4000-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Altar Tables',
    price: 84,
    slug: { _type: 'slug', current: 'altar-tables' },
  },
  {
    _createdAt: '2022-05-10T00:23:00Z',
    _id: 'd55a9e4c-eda8-40e9-8b2b-2381ce43f3ee',
    _rev: '4bvv2M90RuF99SvVHYnMVa',
    _type: 'product',
    _updatedAt: '2022-05-10T01:07:46Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'c91e7dff7d38',
        _type: 'image',
        asset: {
          _ref: 'image-4d14d85f48e35c022467648fb9a3501d9bd56042-5184x3456-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '8585f4fea5fc',
        _type: 'image',
        asset: {
          _ref: 'image-f2385480ebe7f102fa63588c1a649cc37565310d-4272x2848-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '32bb4343dfc0',
        _type: 'image',
        asset: {
          _ref: 'image-64c3730739a579af1f9dc81b363a406504c9a33d-4824x3797-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Postcards',
    price: 5,
    slug: { _type: 'slug', current: 'postcards' },
  },
  {
    _createdAt: '2022-05-10T00:12:31Z',
    _id: 'def12fb3-4f98-4394-8fed-4fa0e6753719',
    _rev: 'dbTx7Zg3RHkVbMMwyOvMXU',
    _type: 'product',
    _updatedAt: '2022-05-10T01:07:54Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \nlorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: '1d8a1f9be1af',
        _type: 'image',
        asset: {
          _ref: 'image-269e47cbf3a0ed52c3d54f9eb16eb710060b8c0d-4480x6720-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '5c9424f75a3a',
        _type: 'image',
        asset: {
          _ref: 'image-c95a776c6c37b0105bd9848af565b30d479b4d13-2599x3898-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'fd93292acdf6',
        _type: 'image',
        asset: {
          _ref: 'image-8496d39585008e50dec89053ee22a9165aeecc12-2836x4254-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Candles',
    price: 12,
    slug: { _type: 'slug', current: 'candles' },
  },
  {
    _createdAt: '2022-05-10T00:21:00Z',
    _id: 'drafts.39c6ba06-7ba0-418a-85ef-29e8246b7486',
    _rev: 'rd6m0v-apw-rqj-1ut-mnhoy0xqc',
    _type: 'product',
    _updatedAt: '2022-05-10T04:02:20Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'f789b2e19736',
        _type: 'image',
        asset: {
          _ref: 'image-113d8d68dbd3737ab843faaf5cb2d11496c1da1e-6449x4705-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '3206adcfeaab',
        _type: 'image',
        asset: {
          _ref: 'image-6809c6ea411bee2d87152c5376f4ec654acd4551-3017x3964-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Wall Decor',
    price: 149,
    slug: { _type: 'slug', current: 'wall-decor' },
  },
  {
    _createdAt: '2022-05-10T00:17:00Z',
    _id: 'drafts.55a4b7f8-1e2f-480c-94d4-b717838fde61',
    _rev: 'm5uaps-pc7-1lc-bm0-qv18pixkk',
    _type: 'product',
    _updatedAt: '2022-05-10T04:03:23Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'f629cc413786',
        _type: 'image',
        asset: {
          _ref: 'image-94897a35a6655f13980f282c536a0e22856b8263-3404x2723-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'ce6fe421f107',
        _type: 'image',
        asset: {
          _ref: 'image-1511d61ebb404874dc8cf9b6af70c082298a47fd-3840x3840-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '80327b811f80',
        _type: 'image',
        asset: {
          _ref: 'image-a66ab9fbd6c742af1a877960e9497d1f5531d4c1-2448x3264-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Runes',
    price: 95,
    slug: { _type: 'slug', current: 'runes' },
  },
  {
    _createdAt: '2022-05-10T00:25:22Z',
    _id: 'e03c5641-5aaf-4ef0-9dd8-3a1d5ccdc96e',
    _rev: 'mS4B3BB5OZSuYJ2tzmxZ8t',
    _type: 'product',
    _updatedAt: '2022-05-10T00:25:22Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'b6cb33683a96',
        _type: 'image',
        asset: {
          _ref: 'image-f5bc32500ffaf75b36d590d53e068142b4819b77-5785x3857-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '6e91fcf9543f',
        _type: 'image',
        asset: {
          _ref: 'image-66adb51f3ab269b4336221a0c5aca831773a3179-6000x3368-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'e812d6459470',
        _type: 'image',
        asset: {
          _ref: 'image-ae9855818cf9b878edc34815f9221747ef32b090-2517x3080-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Animal Totems',
    price: 55,
    slug: { _type: 'slug', current: 'animal-totems' },
  },
  {
    _createdAt: '2022-04-27T22:16:54Z',
    _id: 'ebff8147-935b-4c1a-8921-6ae73bcd3a81',
    _rev: '4bvv2M90RuF99SvVHYh8u6',
    _type: 'product',
    _updatedAt: '2022-05-10T00:08:32Z',
    details:
      'lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc \n\nlorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc lorem ipsum etc etc ',
    image: [
      {
        _key: 'b0893fc30a49',
        _type: 'image',
        asset: {
          _ref: 'image-7ec22706f49bab791045a0fe687f1778fadd65e5-5568x3712-jpg',
          _type: 'reference',
        },
      },
      {
        _key: '303e8cbbed1c',
        _type: 'image',
        asset: {
          _ref: 'image-3abb0468e86aafa5d0cb9022ab4eca284718ab45-6000x4000-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'e132fd291a61',
        _type: 'image',
        asset: {
          _ref: 'image-e97cc2ecd2f318355f224b181e1c581f8ec9abd2-6016x4016-jpg',
          _type: 'reference',
        },
      },
      {
        _key: 'dc5c0aa73461',
        _type: 'image',
        asset: {
          _ref: 'image-d0155181d8249db7579d6f04ff2f28a40b0b62bd-3000x2000-jpg',
          _type: 'reference',
        },
      },
    ],
    name: 'Oils',
    price: 25,
    slug: { _type: 'slug', current: 'oils' },
  },
]

export const aboutUsBanner = [
  {
    _createdAt: '2022-05-09T04:49:00Z',
    _id: '5f5bcbfd-d8f8-46a4-9e8e-81d96e088eca',
    _rev: 'dEFIOHoYyCUIVzdu8dRSBw',
    _type: 'aboutUsBanner',
    _updatedAt: '2022-05-09T04:49:00Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, nulla.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptates accusamus sed sequi molestiae provident soluta quos facilis hic ea explicabo dicta illo laborum, corporis reiciendis culpa quas exercitationem quaerat magnam eveniet quidem. Atque quibusdam alias, minus debitis, laudantium assumenda quisquam a consequuntur consectetur, neque dicta ipsa voluptates nesciunt possimus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo alias voluptatum, dolorum quam tempora numquam cupiditate in eius nulla?',
    image: {
      _type: 'image',
      asset: {
        _ref: 'image-3248ababfe5670b2828afdaf26489efa9f5d3c39-5184x3456-jpg',
        _type: 'reference',
      },
    },
    title: "WELCOME TO LUNA'S CAULDRON",
  },
]

export const footerBanner = [
  {
    _createdAt: '2022-05-09T04:33:18Z',
    _id: '8a4f75cf-57bb-4943-b102-9c091eb73662',
    _rev: '4bvv2M90RuF99SvVHZ5g2D',
    _type: 'footerBanner',
    _updatedAt: '2022-05-10T04:37:25Z',
    bannerText: 'Enter into our magical world',
    image: {
      _type: 'image',
      asset: {
        _ref: 'image-765beabd5b9e5126717357975ceefd03a9c704b3-3648x3648-jpg',
        _type: 'reference',
      },
    },
    price: '25',
    product: 'tarot-cards',
    productTitle: 'Tarot Cards',
  },
]

const IndexPage = () => {
  return (
    <StateContext>
      <Index
        heroBanner={heroBanner}
        products={products}
        aboutUsBanner={aboutUsBanner}
        footerBanner={footerBanner}
        navData={navData}
        subCategoryData={subCategoryData}
      />
    </StateContext>
  )
}

export default IndexPage
