import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { auth0 } from "@/lib/auth0";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amèlie: Tu asistente de viajes con IA",
  description: "En un mundo cada vez más interconectado y dinámico, la forma en que las personas planifican y experimentan sus viajes ha evolucionado significativamente. La digitalización del sector turístico y el surgimiento de nuevas tecnologías han transformado las expectativas de los viajeros, quienes ahora demandan soluciones más rápidas, personalizadas y accesibles. En este contexto, nace Amélie: El Futuro de la Asistencia al Viajero, un proyecto que busca revolucionar la experiencia de planificación y gestión de viajes a través de un asistente virtual basado en inteligencia artificial. Este trabajo surge como respuesta a una problemática común en el sector turístico: la dificultad para ofrecer atención personalizada y constante a un gran volumen de usuarios, especialmente fuera del horario laboral o en situaciones imprevistas. La motivación principal es desarrollar una herramienta que no solo responda de forma eficiente a las necesidades del viajero moderno, sino que también potencie la labor de las agencias de viajes al automatizar procesos repetitivos y optimizar la atención al cliente. El propósito de este proyecto es diseñar e implementar un chatbot inteligente capaz de interactuar de manera natural con los usuarios, brindando asistencia las 24 horas del día, los 7 días de la semana. Entre sus principales funcionalidades se incluyen la atención al cliente, la personalización de viajes, la gestión de reservas y la generación de recomendaciones basadas en los gustos e intereses de cada usuario. Como resultado, se espera no solo mejorar la experiencia del viajero, sino también ofrecer a las agencias una herramienta que contribuya a la eficiencia operativa y la toma de decisiones basada en datos. Este trabajo se encuentra dividido en distintas secciones. En primer lugar, se presentan los fundamentos teóricos y tecnológicos que sustentan el desarrollo del chatbot. Luego, se describe el proceso de diseño y desarrollo del sistema, seguido por un análisis de sus funcionalidades y beneficios. Finalmente, se exponen los resultados obtenidos y las conclusiones derivadas de la implementación. La importancia de este proyecto radica en su potencial para transformar el modo en que se ofrece asistencia turística, demostrando cómo la inteligencia artificial puede ser una aliada estratégica tanto para los viajeros como para los profesionales del sector.",
  keywords: "viajes, inteligencia artificial, planificador de viajes, agente de viajes, IA",
  openGraph: {
    title: "Amèlie: Tu asistente de viajes con IA",
    description: "En un mundo cada vez más interconectado y dinámico, la forma en que las personas planifican y experimentan sus viajes ha evolucionado significativamente. La digitalización del sector turístico y el surgimiento de nuevas tecnologías han transformado las expectativas de los viajeros, quienes ahora demandan soluciones más rápidas, personalizadas y accesibles. En este contexto, nace Amélie: El Futuro de la Asistencia al Viajero, un proyecto que busca revolucionar la experiencia de planificación y gestión de viajes a través de un asistente virtual basado en inteligencia artificial. Este trabajo surge como respuesta a una problemática común en el sector turístico: la dificultad para ofrecer atención personalizada y constante a un gran volumen de usuarios, especialmente fuera del horario laboral o en situaciones imprevistas. La motivación principal es desarrollar una herramienta que no solo responda de forma eficiente a las necesidades del viajero moderno, sino que también potencie la labor de las agencias de viajes al automatizar procesos repetitivos y optimizar la atención al cliente. El propósito de este proyecto es diseñar e implementar un chatbot inteligente capaz de interactuar de manera natural con los usuarios, brindando asistencia las 24 horas del día, los 7 días de la semana. Entre sus principales funcionalidades se incluyen la atención al cliente, la personalización de viajes, la gestión de reservas y la generación de recomendaciones basadas en los gustos e intereses de cada usuario. Como resultado, se espera no solo mejorar la experiencia del viajero, sino también ofrecer a las agencias una herramienta que contribuya a la eficiencia operativa y la toma de decisiones basada en datos. Este trabajo se encuentra dividido en distintas secciones. En primer lugar, se presentan los fundamentos teóricos y tecnológicos que sustentan el desarrollo del chatbot. Luego, se describe el proceso de diseño y desarrollo del sistema, seguido por un análisis de sus funcionalidades y beneficios. Finalmente, se exponen los resultados obtenidos y las conclusiones derivadas de la implementación. La importancia de este proyecto radica en su potencial para transformar el modo en que se ofrece asistencia turística, demostrando cómo la inteligencia artificial puede ser una aliada estratégica tanto para los viajeros como para los profesionales del sector.",
    url: "http://localhost:3000",
    images: ["https://tudominio.com/imagen-portada.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amèlie: Tu asistente de viajes con IA",
    description: "En un mundo cada vez más interconectado y dinámico, la forma en que las personas planifican y experimentan sus viajes ha evolucionado significativamente. La digitalización del sector turístico y el surgimiento de nuevas tecnologías han transformado las expectativas de los viajeros, quienes ahora demandan soluciones más rápidas, personalizadas y accesibles. En este contexto, nace Amélie: El Futuro de la Asistencia al Viajero, un proyecto que busca revolucionar la experiencia de planificación y gestión de viajes a través de un asistente virtual basado en inteligencia artificial. Este trabajo surge como respuesta a una problemática común en el sector turístico: la dificultad para ofrecer atención personalizada y constante a un gran volumen de usuarios, especialmente fuera del horario laboral o en situaciones imprevistas. La motivación principal es desarrollar una herramienta que no solo responda de forma eficiente a las necesidades del viajero moderno, sino que también potencie la labor de las agencias de viajes al automatizar procesos repetitivos y optimizar la atención al cliente. El propósito de este proyecto es diseñar e implementar un chatbot inteligente capaz de interactuar de manera natural con los usuarios, brindando asistencia las 24 horas del día, los 7 días de la semana. Entre sus principales funcionalidades se incluyen la atención al cliente, la personalización de viajes, la gestión de reservas y la generación de recomendaciones basadas en los gustos e intereses de cada usuario. Como resultado, se espera no solo mejorar la experiencia del viajero, sino también ofrecer a las agencias una herramienta que contribuya a la eficiencia operativa y la toma de decisiones basada en datos. Este trabajo se encuentra dividido en distintas secciones. En primer lugar, se presentan los fundamentos teóricos y tecnológicos que sustentan el desarrollo del chatbot. Luego, se describe el proceso de diseño y desarrollo del sistema, seguido por un análisis de sus funcionalidades y beneficios. Finalmente, se exponen los resultados obtenidos y las conclusiones derivadas de la implementación. La importancia de este proyecto radica en su potencial para transformar el modo en que se ofrece asistencia turística, demostrando cómo la inteligencia artificial puede ser una aliada estratégica tanto para los viajeros como para los profesionales del sector.",
    images: ["https://tudominio.com/imagen-portada.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth0.getSession();

  return (
    <html lang="en">
      <body>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}