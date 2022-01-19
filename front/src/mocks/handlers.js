import { rest } from "msw";

export const handlers = [
  rest.get('http://localhost:3000/players', async (req, res, ctx) => {
    return res(
      ctx.json({
        players: [
          {
            backNumber: 1,
            name: 'Kepa Arrizabalaga',
            position: 'GoalKeeper',
            profileImg: 'https://w.namu.la/s/c841a1f86f2f09a564bc2d7028eee4861d30ecca67d5ec5dcc3c2cf7c3a6c3df5098e697416f0768bcae97f1d5a2eece784bced655e8c470b0bea282778191f1e219b4edfca704413394bb626ce3bba1652c502e5c86ad4692d47d310be808fc',
            birthDate: 'October 3, 1994',
            birthPlace: 'Spain',
          },
          {
            backNumber: 2,
            name: 'Antonio Rudiger',
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/189201ea1b11f9920c0da6e3f351d295e11277e58253b365460b4064b1adbd4654df34b65101da28098b7d64e5903dcee9fb3912299fdebae830dc755f0426d72325933090ce48a0fe5e2335f015d4ff60ebc5dfb85c7b7004653cec87cee954',
            birthDate: 'March 3, 1993',
            birthPlace: 'Germany',
          },
          {
            backNumber: 3,
            name: 'Marcos Alonso',
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/af4e9b3536d30392cee4e680faa914982bfeba2641b5897f3ef09cd4a7bc02cf570a027b1cdce6235f73fe1d8d2f880d8d74c50b3a9c861ecbcd7a47dcbdc6eb6dcd84fcb46249ce5009b73f22fb3aab7bf4ca9ba3b679af07fc466daf48c729',
            birthDate: 'December 28, 1990',
            birthPlace: 'Spain',
          },
          {
            backNumber: 4,
            name: 'Andreas Christensen',
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/0c9d10f90509ffd412366aac8ea0b55e41242483883c1909be86d21bed2afd5c5fcdea7a9a419c26770c9406aac9738d166b2c35d5f4aecd2763584255abeb8b99b83649913cc47efc3c15e5e297aaa28596462a8ea38a20039e9696de941f28',
            birthDate: 'April 10, 1996',
            birthPlace: 'Denmark',
          },
          {
            backNumber: 5,
            name: 'Jorginho',
            position: 'Midfielder',
            profileImg: 'https://w.namu.la/s/828432ab8926aab9fbdcb17e8df5aeb2ac0b6f2336d9b15398b7820ed32dc6bc6c27876a45b445fd6cd416c42bd12a657856efa4673d1ea68ccf7e006625a053c785baa342afe78986e2cac4df97eb3792b76af8c4d000452058cba1719e84fb',
            birthDate: 'December 20, 1991',
            birthPlace: 'Brazil',
          },
          {
            backNumber: 6,
            name: 'Thiago Silva',
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/9d1474aa4fe84419f6b9ff2fe788a8debc69813c04309bf3ff5ae72d178192cefac554b2c7d12f348cafa94d2f4a40c5519278f3a95ea25286839e1d10ef474a730daa303b03095cff4717eedf9d5f8b6ee1a9ccf7eb14998da36b3e605f58ef',
            birthDate: 'September 22, 1984',
            birthPlace: 'Brazil',
          },
          {
            backNumber: 7,
            name: `N'Golo Kante`,
            position: 'Midfielder',
            profileImg: 'https://w.namu.la/s/8c0368fb63a42bd0ab5c3f7ae5f8feb2742ec4b8356e5a1b42b2fe28065502182eab454fbce23e07080590f4421055979055bfc259cf1f54e33468ec8dd8521438d9605816670867e9dc8129df91f3688b794820b1230a23df8b0349718ea3e2',
            birthDate: 'March 29, 1991',
            birthPlace: 'France',
          },
          {
            backNumber: 8,
            name: `Mateo Kovacic`,
            position: 'Midfielder',
            profileImg: 'https://w.namu.la/s/29af14523ca2db787093b0a2c2755e3f6c412b071bef8ec7385cf756c2e0817c59a130d9d6c0fa11889607a5b21bac824e0a517b566a487d56795c8a553ea5283873f7724d18f54cbd6270bf74cc5201637d3e2e19be2098033f703b4e6008b1',
            birthDate: 'May 6, 1994',
            birthPlace: 'Austria',
          },
          {
            backNumber: 9,
            name: `Romelu Lukaku`,
            position: 'Forward',
            profileImg: 'https://w.namu.la/s/eb8796d9ab067fc3bbb98ef88525c9c06e8e50102bb924e1a621a7069006cdbe1b4734988ee99020c3378da27ab8e5e764600dcd735ea3230cee303572064b3ef4e703992377f3547cacbb76af3bfe39d239be111da70c13f01841839ec8671e',
            birthDate: 'May 13, 1993',
            birthPlace: 'Belgium',
          },
          {
            backNumber: 10,
            name: `Christian Pulisic`,
            position: 'Forward',
            profileImg: 'https://w.namu.la/s/b917cbdf3f637a1958d7fc90ad53c1dc6a77f209995ca8d290dc9975b3ec4b25eaddff3fc7480b90e185b6c478129a08ddc6fb52a95e8cc3ee1d043c7ed2e169b0d9b2bab6d71e6a7321083691419a37e7194e006edf433789eab79ba166ec0a',
            birthDate: 'September 18, 1998',
            birthPlace: 'United States',
          },
          {
            backNumber: 11,
            name: `Timo Werner`,
            position: 'Forward',
            profileImg: 'https://w.namu.la/s/2dc6be046c39b6411537644937746cf506d41b8d2a59bc065e49365629e1137cb99a8f76738f395d123028e97d1ccfc857a5ffc0ee080d063906aefafdb88c054b2e0005a0b8ceaf677ba1268fd4bafa1a9d2bcc5f827cd16dd69a17085caa7e',
            birthDate: 'March 6, 1996',
            birthPlace: 'Germany',
          },
          {
            backNumber: 12,
            name: `Ruben Loftus-Cheek`,
            position: 'Midfielder',
            profileImg: 'https://w.namu.la/s/b3e515d7fcb9f3090d1e100aa1b8a10a10a237c63e7da1387ddbf6989d018e9efae5b2b29bcb4a1b7afa7d591b0a11977408e0ddd7015865a2aa4da66eb496d5520b4102a84477c3d68b69b21da58be37c16821b6ca2c3db517c7b87b1a3c4a0',
            birthDate: 'January 23, 1996',
            birthPlace: 'England',
          },
          {
            backNumber: 13,
            name: `Marcus Bettineli`,
            position: 'GoalKeeper',
            profileImg: 'https://w.namu.la/s/06941ff80ccd544f9ba164b728a21aca9de64f90df00a46579473389d5ad8ff4b35a8532da1fba6b07b138a3d9130338346a04a4b81737d73ba90fb2759acb6eac8f8a7175af34b0c1725f030e070b173997b79c1a4617addb8fccefb07a30d9',
            birthDate: 'May 24, 1992',
            birthPlace: 'England',
          },
          {
            backNumber: 14,
            name: `Trevoh Chalobah`,
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/994f9e804497647a286022f31ac586621349269eaf381f1347fe1c7efb1de029b2e60393919dc56bc9e002c7efdf48e245967ec5c0054a70b023e7e6f929747f51f5159a15cb9c37e5610f5b204f20a44547558b954d9a5bb1e7317d1dbc2208',
            birthDate: 'July 5, 1999',
            birthPlace: 'England',
          },
          {
            backNumber: 16,
            name: `Edouard Mendy`,
            position: 'GoalKeeper',
            profileImg: 'https://w.namu.la/s/e7a7f6d1e96c96f7c2336da7c4b2391d9be29f29d81e35d042708b983e05419fee29a004b0f2ee6fc3dbd1ed91ef3bb6e0b102f174cade3fe6669424905bfcc5d46eb16ed38d737a572a48fdcbe878d2653dc79cd02bbb886305b7ff9e14fae2',
            birthDate: 'March 1, 1992',
            birthPlace: 'France',
          },
          {
            backNumber: 17,
            name: `Saul Niguez`,
            position: 'Midfielder',
            profileImg: 'https://w.namu.la/s/09b350c8d3fbe62e79307cf3a5577ec67805d4f9657e3def12fe0d66790d257e3774a6bf50fb91674917fc89772ea2a2ac30c1535ed40ef27f612f6a718aebd064f9b2860da8ec21e7509f8f59a24efcc257c727d6a053a86c6e20f1e3f5f8b4',
            birthDate: 'November 21, 1994',
            birthPlace: 'Spain',
          },
          {
            backNumber: 18,
            name: `Ross Barkley`,
            position: 'Midfielder',
            profileImg: 'https://w.namu.la/s/ccf8365851285ed7cebb1354a858c10c3a85444f25780bd3a91ddfb265cfab66b7d586bd03c7f21e798a653c21022547b0c2e4f356bccfc06d9652e33e481699536e19012c95c9d7c3d78ca833ad3d24d468524d985b57c89badd42ae6953440',
            birthDate: 'December 5, 1993',
            birthPlace: 'England',
          },
          {
            backNumber: 19,
            name: `Mason Mount`,
            position: 'Midfielder',
            profileImg: 'https://w.namu.la/s/d551e68d526033412d69cc7cc14e8eedb54c8695463b90ba54257ca80d620889eb6feab0c687579d0be7d8ac2546bc602c292b01061adff3acc14826d3a4780903b80a4435ea063b405e6936f45419930f2a52d42467d9d3322f42077e30614e',
            birthDate: 'January 10, 1999',
            birthPlace: 'England',
          },
          {
            backNumber: 20,
            name: `Callum Hudson-Odoi`,
            position: 'Forward',
            profileImg: 'https://w.namu.la/s/3c43617b3f3648434ec5f54289a38c27c5b6213dda109a1d9006892cf0a998da134d9e56632ed067bbd8518729f517e262d2eeb674b4176269899100379768cdeea927f81a782ed6bcceb8ea70b55443cccc38a0b80548a719fb2bf5a4193b0a',
            birthDate: 'November 7, 2000',
            birthPlace: 'England',
          },
          {
            backNumber: 21,
            name: `Ben Chilwell`,
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/8922a2fa7faaf9d85ce30a3282bed70d001f8da24ee5ce75e8ba05cf580834f7cef00c12e68eed83025b490b1902da24ba088ba86a13ad18bf83201cf6c559e8f76d21239a287fcbf14c3090f06798d885e7a0e68f076200e90abd2fb79fc667',
            birthDate: 'December 21, 1996',
            birthPlace: 'England',
          },
          {
            backNumber: 22,
            name: `Hakim Ziyech`,
            position: 'Forward',
            profileImg: 'https://w.namu.la/s/262a57df57a1cebf50c49721a4385744cd4b90641bc189082f0469bce4ef927042aa7f8646b8831fffee2872308448ecc12c02f21b119c90f87e0cae3cb59a30762cc2cd15d3c1800967ba868d875935467ce8e21f592b27447d39d5e6630c77',
            birthDate: 'March 19, 1993',
            birthPlace: 'Netherlands',
          },
          {
            backNumber: 24,
            name: `Reece James`,
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/5e452365d75abef3b31bdd36b604d822b2e0eb40952d65c858ab31774f95edd0c5f5fef02b1b2917fc7e547edfca76138d6c64cb514d380ef90a8095706b940d4b4ee93a93e467b66b3679cfd555aa60acd95ad4f36881d1c88372dd56607fd0',
            birthDate: 'December 8, 1999',
            birthPlace: 'England',
          },
          {
            backNumber: 28,
            name: `Cesar Azpilicueta`,
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/3607266bc72e4cadb7e5b28d198dbb0a8cc0c18f7a48b8e44f760ee349cad914625729689376d19f3c79838d705b769278a30032feae8c849ac2fb48b2450684b1922cbd0c19f3acd7e9c4b0d4ad55251ff0ca0dba07317a3a1cc4a8cd29d514',
            birthDate: 'August 29, 1989',
            birthPlace: 'Spain',
          },
          {
            backNumber: 29,
            name: `Kai Havertz`,
            position: 'Forward',
            profileImg: 'https://w.namu.la/s/c3f3b5de1d0b5fd8c8ec8481843b3f238c6a4466933c5f2820efcf1fec0e515c1eae8dfe5b4cae7ab2c7e8e8c69ccad09ea8d1ddd949f123075df938e32a650dd8f16754dc09df765816a0684001694bd7b479f5fe949a51c3d411fce34f278e',
            birthDate: 'June 11, 1999',
            birthPlace: 'Germany',
          },
          {
            backNumber: 31,
            name: `Malang Sarr`,
            position: 'Defender',
            profileImg: 'https://w.namu.la/s/f563d63cef1141070f83ed5c09cb2b9e6877e75538b148832629781ff24bdc6a732ca2da25d94bf121569a20d2ddccb7733f4f9cecbb055ea65a7ff05e030babafba25d601564f936204d805275d4679afaaf25a4f1c64db57a4461ee3a7163b',
            birthDate: 'January 23, 1999',
            birthPlace: 'France',
          },
        ]
      })
    )
  }),
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "adsf134fadf1radfa",
        firstName: "KMin",
        lastName: "Choi",
      })
    );
  }),
  rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
    const id = req.url.searchParams.get('id')

    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()

    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `Keyword ${id} not found`
      })
      // ctx.json({
      //   data: {
      //     people: [
      //       ...originalResponseData.data.people,
      //       {
      //         name: id,
      //         age: 27,
      //       },
      //     ],
      //   },
      // })
    );
  }),
];
