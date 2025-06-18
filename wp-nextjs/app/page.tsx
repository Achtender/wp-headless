import { Block, Container, Prose, Section } from "@/components/craft";
import { getPageById, getSettings } from "@/lib/wordpress";

// Revalidate pages every hour
export const revalidate = 3600;

import {generateStaticParams} from "@/app/[slug]/page";
import {generateMetadata} from "@/app/[slug]/page";

export { generateMetadata, generateStaticParams };

export default async function Page() {
  const settings = await getSettings();
  const page = await getPageById(settings.page_on_front);

  return (
    <Section>
      <Container>
        <Prose>
          <h2>
            {page.title.raw} (<span>{page.status}</span>)
          </h2>
          <Block dangerouslySetInnerHTML={{ __html: page.content.raw }}></Block>
        </Prose>
      </Container>
    </Section>
  );
}
