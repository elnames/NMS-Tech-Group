# NMS Tech Group — Landing Page

Sitio web corporativo de **NMS Tech Group**, empresa de desarrollo de software fundada en Santiago, Chile.

**[nmsdev.tech](https://nmsdev.tech)**

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Email | Resend API |
| Infraestructura | Docker, Nginx Proxy Manager |

---

## Secciones

| Sección | Descripción |
|---|---|
| Hero | Headline + terminal animado con stack de la empresa |
| About | Misión, pilares y estadísticas de NMS Tech Group |
| Projects | Bento grid con proyectos en producción y links directos |
| Skills | Marquee infinito de tecnologías y herramientas |
| Contact | Formulario funcional vía Resend API |

### Proyectos destacados
- **Speedrun Delivery** — [speedrun.nmsdev.tech](https://speedrun.nmsdev.tech) · logística en tiempo real
- **PortalTI** — gestión de activos TI y tickets de soporte
- **Finance Pro** — [finance.nmsdev.tech](https://finance.nmsdev.tech) · dashboard financiero personal
- **CeliApp** — app móvil para personas celíacas

---

## Variables de entorno

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

Crea un archivo `.env.local` (desarrollo) o `.env` (producción con Docker).

---

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

---

## Deploy con Docker

```bash
docker compose up -d --build
```

El servicio expone el puerto `3000`. El archivo `docker-compose.yml` lee las variables de entorno desde `.env` en la raíz del proyecto.

---

## Estructura

```
src/
├── app/
│   ├── api/contact/route.ts   # Endpoint de contacto (Resend)
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Hero.tsx
    ├── About.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    ├── Contact.tsx
    ├── Navbar.tsx
    ├── Footer.tsx
    └── ui/
        ├── GlassCard.tsx
        ├── GradientButton.tsx
        └── InfiniteMarquee.tsx
```
