import { Section, Container } from '@/components/craft';
import BackButton from '@/components/back';

export default async function Page() {
  return (
    <Section>
      <Container className='space-y-6'>
        <BackButton />
      </Container>
    </Section>
  );
}
