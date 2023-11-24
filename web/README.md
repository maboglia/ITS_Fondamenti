# web e programmazione

Parlare di web e programmazione può coprire una vasta gamma di argomenti. Ti darò una panoramica generale, ma se hai domande specifiche o vuoi approfondire un particolare aspetto, sentiti libero di chiedere!

## Il Mondo del Web e Programmazione

### Architettura del Web

1. **Client-Server:**
   - Fondamentale architettura di Internet, in cui i client (browser) richiedono risorse e i server le forniscono.

2. **HTTP e HTTPS:**
   - Protocolli di comunicazione per il trasferimento di dati tra client e server.

3. **DNS (Domain Name System):**
   - Sistema per tradurre i nomi di dominio in indirizzi IP.

### Linguaggi Web

4. **HTML (HyperText Markup Language):**
   - Linguaggio di markup per strutturare il contenuto delle pagine web.

5. **CSS (Cascading Style Sheets):**
   - Linguaggio per lo stile e la presentazione delle pagine web.

6. **JavaScript:**
   - Linguaggio di scripting lato client per rendere le pagine web interattive.

### Programmazione Lato Server

7. **Lato Server:**
   - Utilizzo di linguaggi come Node.js, PHP, Python, Ruby, Java per gestire la logica lato server.

8. **Framework Backend:**
   - Strumenti come Express.js (Node.js), Django (Python), Ruby on Rails (Ruby) semplificano lo sviluppo del backend.

### Dati e Database

9. **JSON (JavaScript Object Notation):**
   - Formato di scambio dati comune nel web.

10. **API (Application Programming Interface):**
    - Interfacce che consentono a diverse applicazioni di comunicare tra loro.

11. **Database:**
    - Utilizzo di sistemi di gestione del database come MySQL, PostgreSQL, MongoDB per memorizzare dati.

### Sicurezza e Autenticazione

12. **Sicurezza Web:**
    - Considerazioni sulla sicurezza, tra cui HTTPS, input validation, protezione da attacchi.

13. **OAuth e JWT:**
    - Protocolli per l'autenticazione e l'autorizzazione.

### Strumenti di Sviluppo

14. **IDE (Integrated Development Environment):**
    - Software per lo sviluppo che integra editor, debugger e strumenti di compilazione.

15. **Controllo di Versione:**
    - Utilizzo di sistemi come Git per gestire le modifiche al codice.

### Paradigmi di Sviluppo

16. **MVC (Model-View-Controller):**
    - Approccio comune per organizzare il codice in applicazioni web.

17. **SPA (Single Page Application):**
    - Applicazioni web che operano su una sola pagina, riducendo il caricamento delle pagine.

### Nuove Tecnologie e Tendenze

18. **PWA (Progressive Web App):**
    - Applicazioni web che offrono un'esperienza simile a quella di un'applicazione nativa.

19. **Serverless:**
    - Approccio in cui il fornitore di cloud esegue il codice in risposta a eventi senza gestione di server.

Il mondo del web e della programmazione è in continua evoluzione, con nuove tecnologie e tendenze che emergono regolarmente. È un campo entusiasmante che offre molte opportunità per imparare e creare soluzioni innovative.


# **DOM** 

[DOM](https://raw.githubusercontent.com/maboglia/Fondamenti/master/img/HTML_DOM.png)

## [Document Object Model](https://it.wikipedia.org/wiki/Document_Object_Model)

In informatica il Document Object Model (spesso abbreviato come DOM), letteralmente modello a oggetti del documento, è una forma di rappresentazione dei documenti strutturati come modello orientato agli oggetti.

**DOM** è lo standard ufficiale del W3C per la rappresentazione di documenti strutturati in maniera da essere neutrali sia per la lingua che per la piattaforma. 

**DOM** è inoltre la base per una vasta gamma di interfacce di programmazione delle applicazioni; alcune di esse sono standardizzate dal W3C.

Secondo il **DOM**, un documento è rappresentato da un albero che può essere visitato, modificato e trasformato mediante strumenti specifici.

I nodi dell’albero sono di varia natura:

* nodi documento (document nodes)
* nodi elemento (element nodes)
* nodi testo (text nodes)
* nodi attributo (attribute nodes)
* ...

[Vedi documento dedicato al DOM](http://moodle.its-ictpiemonte.it/pluginfile.php/2353/mod_resource/content/1/2016_webstandard2_DOM.pdf)



### DOM Document Object Model

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset= "utf-8 ">
		<title>Basic DOM example</title>
	</head>
	<body>
		<h1>Hello World!</h1>
		<p>While this is a <strong>very basic HTML document</strong>, 		it actually serves as a detailed example of the document object 			model.</p>
</body>
</html>
```

### DOM
![DOM](https://raw.githubusercontent.com/maboglia/Fondamenti/master/img/DOM.png)
### element_nodes
![element_nodes](https://raw.githubusercontent.com/maboglia/Fondamenti/master/img/element_nodes.png)
### text_nodes
![text_nodes](https://raw.githubusercontent.com/maboglia/Fondamenti/master/img/text_nodes.png)
![text_nodes](https://raw.githubusercontent.com/maboglia/Fondamenti/master/img/text_nodes_code.png)
### attribute_nodes
![attribute_nodes](https://raw.githubusercontent.com/maboglia/Fondamenti/master/img/attribute_nodes.png)
![attribute_nodes](https://raw.githubusercontent.com/maboglia/Fondamenti/master/img/attribute_nodes_code.png)


### Risorse

* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [html.it](https://www.html.it/guide/guida-dom/)
