const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const product1 = await prisma.product.create({
    data: {
      name: 'Placa de Vídeo RTX 3060 Asus Dual',
      description: 'Placa de Vídeo RTX 3060 Asus Dual O12G V2 NVIDIA GeForce, 12GB GDDR6, LHR, DLSS, Ray Tracing - DUAL-RTX3060-O12G-V2',
      img_url: 'https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_p.jpg',
      price: 2299.99,
    }
  })

  const product2 = await prisma.product.create({
    data: {
      name: 'Monitor Gamer Primetek 24h2g 23.8"',
      description: 'Monitor Gamer Primetek 24h2g 23.8" resolução 1920x1080 Tempo de Resposta: Off/Normal/Rápido/Ultrarápido Full Hd Led Hdmi Displayport 165hz',
      img_url: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/378736/Monitor-Gamer-Primetek-24h2g-23-8-resolu-o-1920x1080-Tempo-de-Resposta-Off-Normal-R-pido-Ultrar-pido-Full-Hd-Led-Hdmi-Displayport-165hz_1675369697_p.jpg',
      price: 711.00,
    }
  })

  const product3 = await prisma.product.create({
    data: {
      name: 'Smart TV Samsung 50 Polegadas Gaming Neo QLED 4K',
      description: 'Smart TV Samsung 50 Polegadas Gaming Neo QLED 4K, 4 HDMI, Bluetooth, Wi-Fi, 144Hz, IA, HDR 10+, Alexa, Preto - QN50QN90BAGXZD',
      img_url: 'https://images.kabum.com.br/produtos/fotos/354002/smart-gaming-tv-samsung-neo-qled-50-4k-qn90b-4-hdmi-2-usb-bluetooth-wifi-144hz-ia-alexa-preto-qn50qn90bagxzd_1655143968_p.jpg',
      price: 3999.99,
    }
  })

  const product4 = await prisma.product.create({
    data: {
      name: 'Headset Gamer HyperX Cloud Blue PS4',
      description: 'Headset Gamer HyperX Cloud Blue PS4, Conexão 3.5mm, Driver 53mm, Cancelamento de Ruído, Preto/Azul - 4P5H9AA#ABL',
      img_url: 'https://images.kabum.com.br/produtos/fotos/147962/headset-gamer-hyperx-cloud-blue-ps4-hhsc2-fa-bl-n_1613658279_p.jpg',
      price: 189.99,
    }
  })

  const product5 = await prisma.product.create({
    data: {
      name: 'Cadeira Gamer Husky Gaming Tempest 700',
      description: 'Cadeira Gamer Husky Gaming Tempest 700, Preto e Vermelho, Com Almofadas, Descanso Para Pernas Retrátil, Reclinável - HGMA075',
      img_url: 'https://images.kabum.com.br/produtos/fotos/134177/cadeira-gamer-tempest-husky-gaming-black-red-700_1621952624_p.jpg',
      price: 999.99,
    }
  })

  console.log({product1, product2, product3, product4, product5})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })