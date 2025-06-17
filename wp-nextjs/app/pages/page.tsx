import { getAllPages, getSettings } from "@/lib/wordpress";
import { Container, Prose, Section } from "@/components/craft";
import { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Pages",
  description: "Browse all pages of our blog posts",
  alternates: {
    canonical: "/posts/pages",
  },
};

export default async function Page() {
  const [settings, pages] = await Promise.all([
    getSettings(), //
    getAllPages(),
  ]);

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>Homepage</h2>
          <ul className="grid">
            {pages.filter((page: any) => {
              return page.id === settings.page_on_front;
            }).map((page: any) => (
              <li key={page.id}>
                <Link href={`/${page.slug}`}>{page.title.rendered}</Link>
              </li>
            ))}
          </ul>
          <h2>All Pages</h2>
          <ul className="grid">
            {pages.filter((page: any) => {
              return page.id !== settings.page_on_front;
            }).map((page: any) => (
              <li key={page.id}>
                <Link href={`/${page.slug}`}>{page.title.rendered}</Link>
              </li>
            ))}
          </ul>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
