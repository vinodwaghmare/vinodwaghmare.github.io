// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my CV or view it below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-ai-agents-roadmap-zero-to-production",
        
          title: 'AI Agents Roadmap: Zero to Production <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This guide walks you through every layer of building them: from understanding why LLMs can reason at all, to wiring multi-agent teams that collaborate on complex workflows, to monitoring them in production so they don&#39;t hallucinate their way into trouble.",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/vinod_wa/ai-agents-roadmap-zero-to-production-2ohe", "_blank");
          
        },
      },{id: "post-from-ai-chat-tool-to-autonomous-solvers-a-developer-39-s-guide-to-ai-agents",
        
          title: 'From AI Chat Tool to Autonomous Solvers: A Developer&#39;s Guide to AI Agents... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The world of AI is moving beyond simple text generation. We are entering the era of AI Agents — systems that don&#39;t just answer questions but execute complex workflows autonomously. This guide provides a sequential path to understanding, building, and deploying your own agents.",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev.to/vinod_wa/from-ai-chat-tool-to-autonomous-solvers-a-developers-guide-to-ai-agents-38dk", "_blank");
          
        },
      },{id: "post-n8n-vs-openai-39-s-agentkit-the-real-battle-for-the-future-of-automation",
        
          title: 'n8n vs OpenAI&#39;s AgentKit: The Real Battle for the Future of Automation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How solo devs, small teams, and builders can win by combining human workflows with AI autonomy.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/n8n-vs-openais-agentkit-the-real-battle-for-the-future-of-automation-fe65b469b765", "_blank");
          
        },
      },{id: "post-why-vector-embeddings-are-the-hidden-power-behind-modern-ai",
        
          title: 'Why Vector Embeddings Are the Hidden Power Behind Modern AI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Most people treat AI as a black box. Vector embeddings are one of the clearest windows into how it actually works — and once you understand them, a lot of AI suddenly makes sense. This piece breaks down what they are, why they matter, and how they power everything from semantic search to RAG pipelines.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/why-vector-embeddings-are-the-hidden-power-behind-modern-ai-92a695fd4ea5", "_blank");
          
        },
      },{id: "post-why-vector-embeddings-are-the-hidden-power-behind-modern-ai",
        
          title: 'Why Vector Embeddings Are the Hidden Power Behind Modern AI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/why-vector-embeddings-are-the-hidden-power-behind-modern-ai-92a695fd4ea5?source=rss-92279f550a0f------2", "_blank");
          
        },
      },{id: "post-the-next-billion-dollar-opportunity-fixing-ai-hallucinations",
        
          title: 'The Next Billion Dollar Opportunity: Fixing AI Hallucinations <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/the-next-billion-dollar-opportunity-fixing-ai-hallucinations-99363891571f?source=rss-92279f550a0f------2", "_blank");
          
        },
      },{id: "post-n8n-vs-openai-s-agentkit-the-real-battle-for-the-future-of-automation",
        
          title: 'n8n vs OpenAI’s AgentKit → The Real Battle for the Future of Automation... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/n8n-vs-openais-agentkit-the-real-battle-for-the-future-of-automation-fe65b469b765?source=rss-92279f550a0f------2", "_blank");
          
        },
      },{id: "post-1m-business-idea-blueprint-in-2025-a-practical-roadmap-for-modern-builders",
        
          title: '$1M Business Idea Blueprint in 2025: A Practical Roadmap for Modern Builders <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/1m-business-idea-blueprint-in-2025-a-practical-roadmap-for-modern-builders-ecc9bf735199?source=rss-92279f550a0f------2", "_blank");
          
        },
      },{id: "post-will-ai-take-your-job-the-truth-nobody-wants-to-hear",
        
          title: 'Will AI Take Your Job? The Truth Nobody Wants to Hear <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/will-ai-take-your-job-the-truth-nobody-wants-to-hear-abc659f3cbed?source=rss-92279f550a0f------2", "_blank");
          
        },
      },{id: "post-why-most-engineers-will-never-build-the-product-they-dream-about",
        
          title: 'Why Most Engineers Will Never Build the Product They Dream About. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@VinodShips/why-most-engineers-will-never-build-the-product-they-dream-about-99d3fde9abd5?source=rss-92279f550a0f------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-livecareai",
          title: 'LiveCareAI',
          description: "Real-time AI patient monitoring via smartwatch vitals on Kafka streaming",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-memgenx",
          title: 'MemGenX',
          description: "Unified memory layer for LLMs, agents, and AI apps — one context across all your tools",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
