import nodemailer from 'nodemailer';

// Configuration du transporteur Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Vérification des variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Variables d\'environnement Gmail manquantes');
      return Response.json(
        { error: "Configuration serveur incorrecte" },
        { status: 500 }
      );
    }

    // Préparation du contenu HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Nouveau message de contact</h2>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Sujet:</strong> ${subject}</p>
        </div>
        <h3 style="color: #333; margin-top: 20px;">Message:</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">Répondez directement à : <a href="mailto:${email}">${email}</a></p>
      </div>
    `;

    // Envoi de l'email
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL_TO || 'yassirmastadi@gmail.com',
      replyTo: email,
      subject: `Nouveau message de contact: ${subject}`,
      html: htmlContent,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
    });

    console.log('Email envoyé avec succès. Message ID:', info.messageId);

    return Response.json(
      { message: "Email envoyé avec succès", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    
    return Response.json(
      { error: "Erreur lors de l'envoi du message", details: errorMessage },
      { status: 500 }
    );
  }
}