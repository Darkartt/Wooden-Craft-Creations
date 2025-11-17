import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Button,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
  projectType?: string;
  budget?: string;
  preferredContact: 'email' | 'phone';
}

export function ContactEmail({
  name,
  email,
  phone,
  message,
  projectType,
  budget,
  preferredContact,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerText}>New Contact Form Submission</Text>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>
              <strong>From:</strong> {name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={paragraph}>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
            {projectType && (
              <Text style={paragraph}>
                <strong>Project Type:</strong> {projectType}
              </Text>
            )}
            {budget && (
              <Text style={paragraph}>
                <strong>Budget Range:</strong> {budget}
              </Text>
            )}
            <Text style={paragraph}>
              <strong>Preferred Contact:</strong> {preferredContact === 'email' ? 'Email' : 'Phone'}
            </Text>

            <Hr style={divider} />

            <Text style={paragraph}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>

            <Hr style={divider} />

            <Button
              href={`mailto:${email}`}
              style={button}
            >
              Reply to {name}
            </Button>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from the JKL Woodcrafts contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const header = {
  padding: '32px 20px',
  backgroundColor: '#B8935F',
};

const headerText = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0',
  textAlign: 'center' as const,
};

const content = {
  padding: '20px 32px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#484848',
  marginBottom: '10px',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#484848',
  backgroundColor: '#f4f4f4',
  padding: '16px',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap' as const,
};

const divider = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const button = {
  backgroundColor: '#B8935F',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
  margin: '20px 0',
};

const footer = {
  padding: '20px 32px',
};

const footerText = {
  fontSize: '14px',
  color: '#9ca299',
  textAlign: 'center' as const,
};
