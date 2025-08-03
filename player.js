// player.js
document.addEventListener('DOMContentLoaded', () => {
    // === PENTING: DAFTAR DAN URUTAN LAGU ANDA DI SINI ===
    const songDatabase = {
       'bestpart': {
    title: 'Best Part (feat. H.E.R)',
    artist: 'Daniel Caesar',
    albumArt: 'assets/art/daniel-bestpart.jpg',
    audioSrc: 'assets/songs/daniel-bestpart.mp3',
    lyrics: [
        { time: 0, text: '[Intro Instrumental]' },
        { time: 5.2, text: 'Oh, ey' },
        { time: 14.55, text: 'You don\'t know, babe' },
        { time: 17.15, text: 'When you hold me' },
        { time: 19.45, text: 'And kiss me slowly, it\'s the sweetest thing' },
        { time: 26.0, text: 'And it don\'t change' },
        { time: 29.35, text: 'If I had it my way, you would know that you are' },
        { time: 37.55, text: 'You\'re the coffee that I need in the morning' },
        { time: 41.15, text: 'You\'re my sunshine in the rain when it\'s pouring' },
        { time: 45.0, text: 'Won\'t you give yourself to me, give it all, oh' },
        { time: 49.8, text: 'I just wanna see, I just wanna see how beautiful you are' },
        { time: 58.8, text: 'You know that I see it, I know you\'re a star' },
        { time: 65.8, text: 'Where you go, I follow, no matter how far' },
        { time: 72.0, text: 'If life is a movie, oh you\'re the best part, oh' },
        { time: 82.0, text: 'You\'re the best part, ooh, best part' },
        { time: 91.8, text: 'It\'s the sunrise, and those brown eyes, yes' },
        { time: 97.9, text: 'You\'re the one that I desire' },
        { time: 104.0, text: 'When we wake up, and then we make love' },
        { time: 111.1, text: 'It makes me feel so nice' },
        { time: 115.0, text: 'You\'re my water when I\'m stuck in the desert' },
        { time: 119.0, text: 'You\'re the Tylenol I take when my head hurts' },
        { time: 123.0, text: 'You\'re the sunshine of my life' },
        { time: 129.9, text: 'I just wanna see how beautiful you are' },
        { time: 136.0, text: 'You know that I see it, I know you\'re a star' },
        { time: 142.0, text: 'Where you go, I follow, no matter how far' },
        { time: 148.7, text: 'If life is a movie, then you\'re the best part, oh' },
        { time: 158.0, text: 'You\'re the best part, ooh, best part' },
        { time: 167.1, text: 'If you love me, won\'t you say something?' },
        { time: 170.1, text: 'If you love me, won\'t you?' },
        { time: 173.0, text: 'Won\'t you?' },
        { time: 174.0, text: 'If you love me, won\'t you say something?' },
        { time: 176.2, text: 'If you love me, won\'t you?' },
        { time: 178.0, text: 'Love me won\'t you?' },
        { time: 179.0, text: '[Repeat]'},
    ]
},
        'sempurna': {
            title: 'Sempurna',
            artist: 'Andra and The BackBone',
            albumArt: 'assets/art/andra-sempurna.jpg',
            audioSrc: 'assets/songs/andra-sempurna.mp3',
            lyrics: [
  { time: 0, text: '[Intro]' },
  { time: 10.15, text: 'Kau begitu sempurna' },
  { time: 14.25, text: 'Di mataku kau begitu indah' },
  { time: 18.45, text: 'Kau membuat diriku akan s\'lalu memujamu' },
  { time: 28.7, text: 'Di setiap langkahku' },
  { time: 33.1, text: 'Ku kan s\'lalu memikirkan dirimu' },
  { time: 37.45, text: 'Tak bisa ku bayangkan hidupku tanpa cintamu' },
  { time: 47.7, text: 'Janganlah kau tinggalkan diriku' },
  { time: 52.2, text: 'Takkan mampu menghadapi semua' },
  { time: 56.5, text: 'Hanya bersamamu ku akan bisa' },
  { time: 62.15, text: 'Kau adalah darahku' },
  { time: 67.4, text: 'Kau adalah jantungku' },
  { time: 72.4, text: 'Kau adalah hidupku' },
  { time: 74.4, text: 'Lengkapi diriku' },
  { time: 76.1, text: 'Oh, sayangku, kau begitu...' },
  { time: 83.3, text: 'Sempurna...' },
  { time: 86.8, text: 'Sempurna...' },
  { time: 95.0, text: 'Kau genggam tanganku' },
  { time: 99.4, text: 'Saat diriku lemah dan terjatuh' },
  { time: 104.0, text: 'Kau bisikkan kata dan hapus semua sesalku' },
  { time: 111.0, text: '[Solo Gitar]' },
  { time: 114.0, text: 'Janganlah kau tinggalkan diriku' },
  { time: 119.0, text: 'Takkan mampu menghadapi semua' },
  { time: 123.8, text: 'Hanya bersamamu ku akan bisa' },
  { time: 128.0, text: 'Kau adalah darahku' },
  { time: 133.8, text: 'Kau adalah jantungku' },
  { time: 138.0, text: 'Kau adalah hidupku, lengkapi diriku' },
  { time: 144.0, text: 'Oh, sayangku, kau begitu...' },
  { time: 151.0, text: 'Sempurna...' },
  { time: 155.0, text: 'Sempurna...' },
  { time: 161.0, text: '[Instrument]' },
  { time: 170.0, text: 'Janganlah kau tinggalkan diriku' },
  { time: 175.2, text: 'Takkan mampu menghadapi semua' },
  { time: 180.0, text: 'Hanya bersamamu ku akan bisa' },
  { time: 184.8, text: 'Kau adalah darahku' },
  { time: 189.8, text: 'Kau adalah jantungku' },
  { time: 195.0, text: 'Kau adalah hidupku, lengkapi diriku' },
  { time: 200.0, text: 'Oh, sayangku, kau begitu' },
  { time: 204.8, text: 'Kau adalah darahku' },
  { time: 210.0, text: 'Kau adalah jantungku' },
  { time: 214.8, text: 'Kau adalah hidupku, lengkapi diriku'},
  { time: 220.0, text: 'Oh, sayangku, kau begitu' },
  { time: 224.8, text: 'Sayangku kau begitu' },
  { time: 230.0, text: 'Sempurna...' },
  { time: 240.0, text: '...' }
]
        },
        'lowkey': {
            title: 'lowkey',
            artist: 'NIKI',
            albumArt: 'assets/art/niki-lowkey.jpg',
            audioSrc: 'assets/songs/niki-lowkey.mp3',
            lyrics: [
  { time: 0, text: '[Intro]' },
  { time: 8.45, text: "Wonder what I'll do when the cops come through and the whiskey's run out" },
  { time: 12.15, text: "'Cause I've been lookin' at you since half past two, wanna take this downtown?" },
  { time: 16.35, text: "This liquid courage got me way too honest" },
  { time: 20.15, text: "Put your phone on vibrate, let's catch a vibe, babe, while the sun's down" },
  { time: 24.55, text: "Hush now, I know we're a little too fucked up to stay still, love" },
  { time: 28.55, text: "Be as quiet as you can, 'cause if anyone sees, they'll just blow shit up" },
  { time: 32.7, text: "I don't gotta know if you're taken, I'll just let you know, babe, your shoes fakin'" },
  { time: 36.8, text: "No one's gotta know, just us and the moon 'til the sun starts wakin'" },
  { time: 40.0, text: "Up's the only direction I see" },
  { time: 47.0, text: "As long as we keep this"},
  { time: 47.8, text: "low, low, low, low, low, low, lowkey (Ah, ah)" },
  { time: 55.8, text: "You ain't even gotta lo-lo-lo-lo-love me (Ah, ah)" },
  { time: 65.1, text: "Us in a king-size, keep it a secret" },
  { time: 68.6, text: "Say I'm your queen, I don't wanna leave this" },
  { time: 73.1, text: "low, low, low, low, low, low, lowkey" },
  { time: 77.0, text: "low, low, low, low, low, low, lowkey" },
  { time: 81.0, text: "Wizard with words, tellin' me my energy's so bewitching" },
  { time: 85.0, text: "So I'll go first, there's an open bar, let's close this distance"},
  { time: 89.0, text: "Oh my, don't make me have to spell it all night"},
  { time: 97.0, text: "I don't really give a fuck about all the 'He said, she said' bullshit"},
  { time: 101.0, text: "So pick your poison love, let's go somewhere a little more exclusive"},
  { time: 105.0, text: "Take a shot, take a chance, take my hand boy"},
  { time: 107.0, text: "Tension so intense like an asteroid"},
  { time: 109.0, text: "Be discreet, gotta dodge all the tabloids"},
  { time: 113.0, text: "Let's not think too much, there ain't no problems"},
  { time: 120.0, text: "So long as we keep this"},
  { time: 120.9, text: "low, low, low, low, low, low, lowkey (Ah, ah)" },
  { time: 128.9, text: "You ain't even gotta lo-lo-lo-lo-love me (Ah, ah)" },
  { time: 138.0, text: "Us in a king-size, keep it a secret" },
  { time: 141.0, text: "Say I'm your queen, I don't wanna leave this" },
  { time: 145.9, text: "low, low, low, low, low, low, lowkey" },
  { time: 150, text: "..." }
]
        },
        'myheart': {
            title: 'You\'ll Be in My Heart',
            artist: 'NIKI',
            albumArt: 'assets/art/niki-myheart.jpg',
            audioSrc: 'assets/songs/niki-myheart.mp3',
           lyrics: [
  { time: 0, text: '' },
  { time: 0.45, text: 'Come stop your crying, it\'ll be alright' },
  { time: 5.75, text: 'Just take my hand, hold it tight' },
  { time: 10.55, text: 'I will protect you from all around you' },
  { time: 15.55, text: 'I will be here, don\'t you cry' },
  { time: 20.65, text: 'For one so small, you seem so strong' },
  { time: 25.45, text: 'My arms will hold you, keep you safe and warm' },
  { time: 30.15, text: 'This bond between us can\'t be broken' },
  { time: 35.15, text: 'I will be here, don\'t you cry' },
  { time: 40.25, text: '\'Cause you\'ll be in my heart' },
  { time: 45.15, text: 'Yes, you\'ll be in my heart' },
  { time: 49.7, text: 'From this day on, now and forever more' },
  { time: 60.1, text: 'Yes you\'ll be in my heart' },
  { time: 66.0, text: 'No matter what they say' },
  { time: 71.0, text: 'You\'ll be here in my heart, always' },
  { time: 81.8, text: 'Why can\'t they understand the way we feel?' },
  { time: 86.8, text: 'They just don\'t trust what they can\'t explain' },
  { time: 92.0, text: 'I know we\'re different, but deep inside us' },
  { time: 97.0, text: "We're not that different at all (we're not that different at all)" },
  { time: 102.0, text: "And you'll be in my heart (oh)" },
  { time: 107.0, text: "Yes, you'll be in my heart" },
  { time: 112.0, text: "From this day on, now and forevermore (oh)" },
  { time: 122.0, text: "Don't listen to them, 'cause what do they know?" },
  { time: 127.0, text: "We need each other to have and to hold" },
  { time: 132.0, text: "They'll see in time, I know" },
  { time: 142.0, text: "When destiny calls you, you must be strong" },
  { time: 147.8, text: "I may not be with you, but you got to hold on" },
  { time: 152.0, text: "They'll see in time, I know" },
  { time: 160.7, text: "Show them together" },
  { time: 163.0, text: "'Cause you'll be in my heart" },
  { time: 167.9, text: "Yes, you'll be in my heart" },
  { time: 173.0, text: "From this day on, now and forevermore (oh)" },
  { time: 184.0, text: "You'll be in my heart" },
  { time: 188.5, text: "No matter what they say" },
  { time: 194.0, text: "You'll be here in my heart always" },
  { time: 203.8, text: "Always..." },
  { time: 208.0, text: "Just look over your shoulder (x4)" },
  { time: 227.0, text: "I'll be there always..." },
]
        },
            'bergema': {
        title: 'bergema sampai selamanya',
        artist: 'Nadhif Basalamah',
        albumArt: 'assets/art/nadhif-bergema.jpg',
        audioSrc: 'assets/songs/nadhif-bergema.mp3',
        lyrics: [
        { time: 0, text: '[Intro]' },
        { time: 3.0, text: 'Aku ingin jadi teman nyamanmu' },
        { time: 8.0, text: 'Tempat kauhilangkan keluh kesahmu' },
        { time: 14.0, text: 'Kita berbincang tak karuan tanpa beban' },
        { time: 20.0, text: 'Dan juga khayalan tentang masa depan' },
        { time: 28.0, text: 'Ku tak ingin cepat berlalu (berlalu)' },
        { time: 33.8, text: 'Waktu yang kupunya denganmu' },
        { time: 38.0, text: 'Kita berdansa dan tertawa, gandeng tangan' },
        { time: 44.0, text: 'Semoga bergema sampai selamanya' },
        { time: 51.0, text: 'Dunia pasti ada akhirnya' },
        { time: 57.0, text: 'Bintang-bintang pun ada umurnya' },
        { time: 63.0, text: 'Maka tenang saja, kita di sini berdua (Aaahh)' },
        { time: 72.0, text: 'Nikmati sementara yang ada' },
        { time: 75.5, text: '[Instrument]' },
        { time: 87.0, text: 'Bersandar padaku, taruh di bahuku' },
        { time: 92.0, text: 'Relakan semua, bebas semaumu (bebas semaumu)' },
        { time: 98.8, text: 'Percayalah (percayalah), ini sayang terlewatkan (terlewatkan)' },
        { time: 104.0, text: 'Kusampaikan dalam nyanyian, bergema sampai s\'lamanya' },
        { time: 110.9, text: '[Instrument]' },
        { time: 135.0, text: 'Dunia pasti ada akhirnya' },
        { time: 140.8, text: 'Bintang-bintang pun ada umurnya' },
        { time: 147.0, text: 'Maka tenang saja, kita di sini berdua' },
        { time: 156.0, text: 'Nikmati sementara yang ada' },
        { time: 165.0, text: 'Bintang-bintang pun ada umurnya' },
        { time: 171.0, text: 'Maka tenang saja, kita di sini berdua' },
        { time: 180.0, text: 'Nikmati sementara yang ada' },
        { time: 186.0, text: 'Semoga bergema selamanya' },
        { time: 193.0, text: '....' },
       ]
            },
        'aboutyou': {
            title: 'About You',
            artist: 'The 1975',
            albumArt: 'assets/art/1975-aboutyou.jpg',
            audioSrc: 'assets/songs/1975-aboutyou.mp3',
           lyrics: [
  { time: 0, text: '[Instrumental Intro]' },
  { time: 44.9, text: 'I know a place' },
  { time: 54.0, text: 'It’s somewhere I go when I need to remember your face' },
  { time: 60.0, text: '...' },
  { time: 69.0, text: 'We get married in our heads' },
  { time: 75.0, text: 'Something to do while we try to recall how we met' },
  { time: 84.0, text: 'Do you think I have forgotten? (x3)' },
  { time: 99.0, text: 'About you?' },
  { time: 104.0, text: 'You and I were alive' },
  { time: 114.8, text: 'With nothing to do I could lay and just look in your eyes' },
  { time: 124.6, text: 'Wait and pretend' },
  { time: 134.6, text: 'Hold on and hope that we\'ll find our way back in the end' },
  { time: 144.0, text: 'Do you think I have forgotten? (x3)' },
  { time: 158.5, text: 'About you?' },
  { time: 164.0, text: 'Do you think I have forgotten? (x3)' },
  { time: 179.0, text: 'About you?' },
  { time: 185.0, text: 'There was something about you that now I can\'t remember' },
  { time: 189.0, text: 'It\'s the same damn thing that made my heart surrender' },
  { time: 194.0, text: 'And I\'ll miss you on a train' },
  { time: 196.9, text: '\'ll miss you in the morning' },
  { time: 199.0, text: 'I never know what to think about' },
  { time: 204.0, text: 'I think about you' },
  { time: 209.0, text: 'About you' },
  { time: 211.0, text: '...' },
  { time: 214.0, text: 'Do you think I have forgotten?' },
  { time: 219.8, text: 'About you (x3)' },
  { time: 234.0, text: 'Do you think I have forgotten?' },
  { time: 239.0, text: 'About you' },
  { time: 241.0, text: '[Outro]' },
]
        },
         'photograph': {
            title: 'Photograph',
            artist: 'Ed Sheeran',
            albumArt: 'assets/art/ed-photograph.jpg',
            audioSrc: 'assets/songs/ed-photograph.mp3',
            lyrics: [
  { time: 0, text: '[Intro]' },
  { time: 16.55, text: 'Loving can hurt' },
  { time: 20.75, text: 'Loving can hurt sometimes' },
  { time: 25.15, text: 'But it\'s the only thing that I know' },
  { time: 29.7, text: '...' },
  { time: 33.5, text: 'When it gets hard' },
  { time: 38.0, text: 'You know it can get hard sometimes' },
  { time: 43.0, text: 'It is the only thing that makes us feel alive' },
  { time: 50.0, text: '...' },
  { time: 53.8, text: 'We keep this love in a photograph' },
  { time: 58.0, text: 'We made these memories for ourselves' },
  { time: 61.1, text: 'Where our eyes are never closing' },
  { time: 64.1, text: 'Hearts are never broken' },
  { time: 66.0, text: 'Times forever frozen still' },
  { time: 70.0, text: 'So you can keep me' },
  { time: 73.0, text: 'Inside the pocket' },
  { time: 75.0, text: 'Of your ripped jeans' },
  { time: 77.9, text: 'Holding me closer' },
  { time: 79.0, text: '\'Til our eyes meet' },
  { time: 82.0, text: 'You won\'t ever be alone' },
  { time: 87.0, text: 'Wait for me to come home' },
  { time: 92.1, text: 'Loving can heal' },
  { time: 96.0, text: 'Loving can mend your soul' },
  { time: 101.1, text: 'And it\'s the only thing that I know (know)' },
  { time: 109.0, text: 'I swear it will get easier' },
  { time: 113.0, text: 'Remember that with every piece of ya' },
  { time: 119.0, text: 'And it\'s the only thing we take with us when we die' },
  { time: 129.0, text: 'We keep this love in a photograph' },
  { time: 133.0, text: 'We made these memories for ourselves' },
  { time: 137.1, text: 'Where our eyes are never closing' },
  { time: 139.8, text: 'Hearts were never broken' },
  { time: 142.0, text: 'Times forever frozen still' },
  { time: 145.5, text: 'So you can keep me' },
  { time: 148.0, text: 'Inside the pocket' },
  { time: 150.0, text: 'Of your ripped jeans' },
  { time: 153.0, text: 'Holding me closer' },
  { time: 154.9, text: '\'Til our eyes meet' },
  { time: 157.0, text: 'You won\'t ever be alone'},
  { time: 163.0, text: 'And if you hurt me' },
  { time: 166.0, text: 'That\'s OK, baby, only words bleed'},
  { time: 171.0, text: 'Inside these pages you just hold me' },
  { time: 175.0, text: 'And I won\'t ever let you go' },
  { time: 180.0, text: 'Wait for me to come home (x4)' },
  { time: 199.0, text: 'Oh you can fit me' },
  { time: 201.0, text: 'Inside the necklace you got when you were sixteen' },
  { time: 206.0, text: 'Next to your heartbeat' },
  { time: 208.0, text: 'Where I should be' },
  { time: 211.0, text: 'Keep it deep within your soul' },
  { time: 217.0, text: 'And if you hurt me' },
  { time: 219.8, text: 'Well, that\'s OK, baby, only words bleed' },
  { time: 224.0, text: 'Inside these pages you just hold me'},
  { time: 228.0, text: 'And I won\'t ever let you go' },
  { time: 235.0, text: 'When I\'m away' },
  { time: 237.8, text: 'I will remember how you kissed me' },
  { time: 242.0, text: 'Under the lamppost' },
  { time: 243.0, text: 'Back on 6th street' },
  { time: 246.0, text: 'Hearing you whisper through the phone' },
  { time: 251.0, text: '"Wait for me to come home"' },
  { time: 253, text: '...' }
]
        },
        'tothebone': {
            title: 'To The Bone',
            artist: 'Pamungkas',
            albumArt: 'assets/art/pamungkas-tothebone.jpg',
            audioSrc: 'assets/songs/pamungkas-tothebone.mp3',
            lyrics: [
  { time: 0, text: '[Intro]' },
  { time: 35.0, text: 'Have I ever told you' },
  { time: 37.8, text: 'I want you to the bone' },
  { time: 41.0, text: 'Have I ever called you' },
  { time: 44.0, text: 'When you are all alone' },
  { time: 49.0, text: 'And if I ever forget' },
  { time: 52.0, text: 'To tell you how I feel' },
  { time: 56.0, text: 'Listen to me now, babe' },
  { time: 58.0, text: 'I want you to the bone' },
  { time: 61.0, text: 'I want you to the bone, oh, oh, oh, oh (x2)' },
  { time: 75.0, text: 'Maybe if you can see' },
  { time: 78.8, text: 'What I feel through my bone' },
  { time: 82.8, text: 'Every corner in me' },
  { time: 85.8, text: 'There\'s your presence that grown' },
  { time: 89.0, text: 'Maybe I nurture it more' },
  { time: 93.0, text: 'By saying how I feel' },
  { time: 96.2, text: 'But I did mean it before' },
  { time: 99.5, text: 'I want you to the bone' },
  { time: 102.5, text: 'I want you to' },
  { time: 104.8, text: 'Take me home, I\'m falling' },
  { time: 108.2, text: 'Love me long, I\'m rolling' },
  { time: 111.2, text: 'Losing control, body and soul' },
  { time: 114.7, text: 'Mind too for sure, I\'m already yours' },
  { time: 118.0, text: 'Walk you down, I\'m all in' },
  { time: 122.0, text: 'Hold you tight, you call and' },
  { time: 125.0, text: 'I\'ll take control, your body and soul' },
  { time: 128.0, text: 'Mind too for sure, I\'m already yours' },
  { time: 134.0, text: 'Would that be alright? Hey, would that be alright?' },
  { time: 144.2, text: 'I want you to the bone' },
  { time: 151.2, text: 'So bad I can\'t breathe, no' },
  { time: 158.0, text: 'I want you to the bone' },
  { time: 160.0, text: '...' },
  { time: 172.0, text: 'Of all the ones that begged to stay' },
  { time: 176.0, text: 'I\'m still longing for you' },
  { time: 179.0, text: 'Of all the ones that cried their way' },
  { time: 183.0, text: 'I\'m still waiting on you' },
  { time: 186.0, text: 'Maybe we seek for something that' },
  { time: 189.0, text: 'We couldn\'t ever have' },
  { time: 193.0, text: 'Maybe we choose the only love' },
  { time: 196.0, text: 'We know we won\'t accept' },
  { time: 200.0, text: 'Or maybe we\'re taking all the risks' },
  { time: 203.5, text: 'For something that is real' },
  { time: 206.8, text: '\'Cause maybe the greatest love of all' },
  { time: 210.0, text: 'Is who the eyes can\'t see, yeah' },
  { time: 214.0, text: '[Instrument]' },
  { time: 241.0, text: 'Take me home, I\'m fallin\'' },
  { time: 245.0, text: 'Love me long, I\'m rollin\'' },
  { time: 248.0, text: 'Losing control, body and soul' },
  { time: 251.0, text: 'Mind too for sure, I\'m already yours' },
  { time: 255.0, text: 'Walk you down, I\'m all in' },
  { time: 259.0, text: 'Hold you tight, you call and' },
  { time: 262.0, text: 'I\'ll take control, your body and soul' },
  { time: 265.0, text: 'Mind too for sure, I\'m already yours' },
  { time: 272.0, text: '[Vocal Instrument]' },
  { time: 308.0, text: 'I want you to the bone, oh, bone, ooh yeah, yeah, yeah, yeah (x3)' },
  { time: 331.0, text: '...' },
  { time: 336.0, text: '[I want you to the bone, bone, bone, bone]' },
  { time: 342.0, text: '[I want you to the bone]' },
  { time: 430, text: '...' }
]
        },
        'love': {
            title: 'love.',
            artist: 'wave to earth',
            albumArt: 'assets/art/w2e-love.jpg',
            audioSrc: 'assets/songs/w2e-love.mp3',
           lyrics: [
  { time: 0, text: '[Instrumental Intro]' },
  { time: 33.0, text: '사람 사이 사람 (salam sai salam)' },
  { time: 37.0, text: '바람 사이 바람 (balam sai balam)' },
  { time: 41.0, text: '각자의 염원이 바래고 (gagjaui yeom-won-i balaego)' },
  { time: 51.0, text: '덧칠되어 (deoschildoeeo)' },
  { time: 57.1, text: '...' },
  { time: 60.5, text: '우, 발이 닿을 만큼 굳어지면 (u, bal-i dah-eul mankeum gud-eojimyeon)' },
  { time: 71.2, text: '아, 비로소 내 세상이 되어줘 (a, biloso nae sesang-i doeeojwo)' },
  { time: 90.0, text: '...' },
  { time: 95.2, text: '나의 작은 마음도 (naui jag-eun ma-eumdo)' },
  { time: 102.1, text: '그 안에 자란 나음도 (geu an-e jalan na-eumdo)' },
  { time: 110.0, text: '부서지고 굳어지고 (buseojigo gud-eojigo)' },
  { time: 118.0, text: '녹아내리고나면 (nog-anaeligonamyeon)' },
  { time: 125.0, text: '그제서야 보이는 나의 영원 (geujeseoya boineun naui yeong-won)' },
  { time: 137.1, text: '[Instrument]' },
  { time: 165.0, text: '사람 사이 사랑 (salam sai salang)' },
  { time: 169.0, text: '모두 함께 모여서, 우, 아 (modu hamkke moyeoseo, u, a)' },
  { time: 181.1, text: '영원을 바라고 몸 마음 묻어내면, 우우 (yeong-won-eul balago mom ma-eum mud-eonaemyeon, uu)' },
  { time: 200.0, text: '비로소 우리의 세상이 완벽해, 아아 (biloso uliui sesang-i wanbyeoghae, aa)' },
  { time: 219.1, text: '사랑으로, 사랑으로 (salang-eulo, salang-eulo)' },
  { time: 227.2, text: '나의 작은 마음도 (naui jag-eun ma-eumdo)' },
  { time: 234.0, text: '그 안에 작은 파도처럼 (geu an-e jag-eun padocheoleom)' },
  { time: 242.0, text: '부서지고 밀려와선 (buseojigo millyeo-waseon)' },
  { time: 250.0, text: '네게 녹아내리고 (nege nog-anaeligo)' },
  { time: 257.0, text: '그제서야 보이는 나의 영원, 오오 (geujeseoya boineun naui yeong-won, oo)' },
  { time: 270, text: '[Outro]' }
]
        },
        'seasons': {
            title: 'seasons',
            artist: 'wave to earth',
            albumArt: 'assets/art/w2e-seasons.jpg',
            audioSrc: 'assets/songs/w2e-seasons.mp3',
            lyrics: [
  { time: 0, text: '[Intro]' },
  { time: 19.0, text: 'I can\'t be your love' },
  { time: 25.0, text: 'Look it\'s too trivial for you now' },
  { time: 33.0, text: 'Oh my life\'s falling apart' },
  { time: 40.0, text: 'Maybe no one will know if I disappear' },
  { time: 49.0, text: 'But I\'ll pray for you all the time' },
  { time: 63.0, text: 'If I could be by your side' },
  { time: 72.0, text: 'I\'ll give you all my life my seasons' },
  { time: 83.6, text: '[Instrument]' },
  { time: 115.1, text: 'I can\'t be your love' },
  { time: 120.0, text: 'Cause I\'m afraid I\'ll ruin your life' },
  { time: 131.0, text: 'While the leaves withered away' },
  { time: 135.0, text: 'and grew again you have gone far away' },
  { time: 143.4, text: 'I\'ll be pushing up daisies' },
  { time: 150.0, text: 'and bring all the chances to here' },
  { time: 159.5, text: 'But I\'ll pray for you all the time' },
  { time: 173.5, text: 'If I could be by your side' },
  { time: 182.0, text: 'I\'ll give you all my life my seasons' },
  { time: 190.0, text: 'By your side I\'ll be your seasons' },
  { time: 200.2, text: '[Outro]' },
]
        },
        'bad': {
            title: 'bad',
            artist: 'wave to earth',
            albumArt: 'assets/art/w2e-love.jpg',
            audioSrc: 'assets/songs/w2e-bad.mp3',
          lyrics: [
  { time: 0, text: '[Intro]' },
  { time: 2.1, text: 'How could my day be bad' },
  { time: 4.8, text: 'When I\'m with you' },
  { time: 7.8, text: 'You\'re the only one who makes me laugh' },
  { time: 12.5, text: 'So how can my day be bad?' },
  { time: 20.7, text: 'It\'s a day for you' },
  { time: 25.0, text: '...' },
  { time: 31.0, text: 'Lately, life\'s so boring' },
  { time: 35.8, text: 'I\'ve been watching Netflix all day long' },
  { time: 42.0, text: 'I thought there would be' },
  { time: 46.1, text: 'No things left to watch' },
  { time: 48.9, text: 'So I let myself out' },
  { time: 52.3, text: '...' },
  { time: 57.5, text: 'When I went to the park' },
  { time: 63.0, text: 'I recognised you at a glance' },
  { time: 70.4, text: 'Face to face, we just smiled' },
  { time: 75.9, text: 'We already know that we\'ll be together' },
  { time: 87.0, text: 'How could my day be bad when I\'m with you?' },
  { time: 92.0, text: 'You\'re the only one who makes me laugh' },
  { time: 98.0, text: 'So how can my day be bad?' },
  { time: 105.0, text: 'It\'s a day for you' },
  { time: 110.0, text: '...' },
  { time: 115.5, text: 'Coffee in the morning, you and the sun' },
  { time: 123.1, text: 'There\'s a brown hue in your eyes' },
  { time: 130.0, text: 'How pretty it is' },
  { time: 133.1, text: 'I think I\'m in love' },
  { time: 138.0, text: '[Instrument]' },
  { time: 171.0, text: 'When I went to the park' },
  { time: 176.0, text: 'I recognized you at a glance' },
  { time: 183.0, text: 'Face to face, we smiled'},
  { time: 187.0, text: 'And I finally held your hands'},
  { time: 196.0, text: 'How could my day be bad'},
  { time: 199.0, text: 'When I\'m with you'},
  { time: 201.0, text: 'You\'re the only one who makes me laugh'},
  { time: 207.0, text: 'So how can my day be bad?'},
  { time: 214.0, text: 'It\'s a day for you'},
  { time: 219.0, text: '...' },
  { time: 224.0, text: 'How could my day be bad'},
  { time: 227.0, text: 'When I\'m with you'},
  { time: 229.0, text: 'You\'re the only one who gives me love'},
  { time: 236.0, text: 'So how can my day be bad?' },
  { time: 243.0, text: 'It\'s a day for you' },
  { time: 1621, text: '[Outro]' }
]
        },
        'calla': {
            title: 'calla',
            artist: 'wave to earth',
            albumArt: 'assets/art/w2e-calla.jpg',
            audioSrc: 'assets/songs/w2e-calla.mp3',
            lyrics: [
  { time: 0, text: '[Intro]' },
  { time: 20.0, text: 'It\'s raining hard today' },
  { time: 30.0, text: 'It\'s a bit too much for me' },
  { time: 37.0, text: 'I know it will make you smile' },
  { time: 42.7, text: 'So, let ourselves get wet inside the rain' },
  { time: 52.7, text: 'The whole world is getting filled with your scent' },
  { time: 62.0, text: 'Hope this moment is not a daydream' },
  { time: 70.0, text: 'Calla, someone said that your time' },
  { time: 78.0, text: 'Will be over soon' },
  { time: 81.4, text: 'But Calla, you can always grow back, oh' },
  { time: 89.0, text: 'If you don\'t have enough sunlight' },
  { time: 97.0, text: 'I\'ll blow the clouds away, Calla' },
  { time: 105.4, text: '...' },
  { time: 108.0, text: 'Bloom yourself until the end' },
  { time: 116.4, text: 'Wherever you are, I\'ll be there for you' },
  { time: 123.0, text: 'My whole world is filled up' },
  { time: 128.4, text: 'With your scent, babe' },
  { time: 134.0, text: 'I hope this moment\'s not a daydream' },
  { time: 143.0, text: 'Raindrops shines like the stars' },
  { time: 150.0, text: 'Well, everything shines when I\'m with you, babe' },
  { time: 160.0, text: 'Raindrops falls like comets' },
  { time: 167.0, text: 'I\'ll make this moment not to be a daydream' },
  { time: 175.0, text: 'Calla, someone said that your time' },
  { time: 183.0, text: 'Will be over soon' },
  { time: 186.0, text: 'But Calla, you can always grow back, oh' },
  { time: 194.0, text: 'If you don\'t have enough sunlight' },
  { time: 206.0, text: 'Calla, someone said that your time' },
  { time: 213.0, text: 'Will be over soon' },
  { time: 216.0, text: 'But Calla, you can always grow back, oh' },
  { time: 224.0, text: 'If you don\'t have enough sunlight' },
  { time: 232.0, text: 'I\'ll blow the clouds away, Calla' },
  { time: 240.0, text: '[Outro]' }
]
        },
    };
    
    // TENTUKAN URUTAN LAGU DI SINI
    const songOrder = ['bestpart', 'sempurna', 'lowkey', 'myheart', 'bergema', 'aboutyou', 'photograph', 'tothebone', 'love', 'seasons', 'bad', 'calla']; 
    // ==============================================================

    const params = new URLSearchParams(window.location.search);
    const songId = params.get('song');
    const songData = songDatabase[songId] || songDatabase[songOrder[0]]; // Default ke lagu pertama jika ID tidak valid
    let currentSongIndex = songOrder.indexOf(songId);
    if (currentSongIndex === -1) {
        currentSongIndex = 0; // Jika songId tidak ditemukan, set ke lagu pertama
    }

    // Elemen UI
    const albumArt = document.getElementById('player-album-art');
    const title = document.getElementById('player-title');
    const artist = document.getElementById('player-artist');
    const lyrics = document.getElementById('player-lyrics');
    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    const volumeSlider = document.getElementById('volume-slider');
    
    function loadSong(song) {
        albumArt.src = song.albumArt;
        title.innerText = song.title;
        artist.innerText = song.artist;
        audio.src = song.audioSrc;
        lyrics.innerText = song.lyrics[0]?.text || '...';
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            audio.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    }
    
    function playNext() {
        const nextIndex = (currentSongIndex + 1) % songOrder.length; // Wrap around to the start
        const nextSongId = songOrder[nextIndex];
        window.location.href = `player.html?song=${nextSongId}`;
    }

    function playPrev() {
        const prevIndex = (currentSongIndex - 1 + songOrder.length) % songOrder.length; // Wrap around to the end
        const prevSongId = songOrder[prevIndex];
        window.location.href = `player.html?song=${prevSongId}`;
    }

    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.innerText = formatTime(currentTime);

        const currentLyric = songData.lyrics.findLast(lyric => currentTime >= lyric.time);
        if (currentLyric && lyrics.innerText !== currentLyric.text) {
            lyrics.classList.add('lyric-fade');
            setTimeout(() => {
                lyrics.innerText = currentLyric.text;
                lyrics.classList.remove('lyric-fade');
            }, 200);
        }
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        if (duration) {
           audio.currentTime = (clickX / width) * duration;
        }
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlay);
    nextBtn.addEventListener('click', playNext);
    prevBtn.addEventListener('click', playPrev);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => totalDurationEl.innerText = formatTime(audio.duration));
    audio.addEventListener('ended', playNext); // Otomatis ke lagu selanjutnya
    document.getElementById('progress-bar-wrapper').addEventListener('click', setProgress);
    volumeSlider.addEventListener('input', (e) => audio.volume = e.target.value);

    // Inisialisasi
    loadSong(songData);
});
