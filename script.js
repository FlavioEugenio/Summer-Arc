    // ============================================
    // DADOS DOS PLANOS DE TREINO (separados por gênero e nível)
    // ============================================
    const planosTreino = {
      masculino: {
        iniciante: {
          '3x': {
            titulo: "Plano Iniciante Masculino - 3x Semana - Fullbody técnico",
            duracao: "40-50 minutos",
            frequencia: "3x por semana",
            dias: [
              {
                nome: "Segunda-feira",
                icone: "💪",
                exercicios: [
                  { nome: "Supino Máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley Frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press 45 graus", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira Flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento Máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca scott", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio(esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino Máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley Frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press 45 graus", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira Flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento Máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca scott", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio(esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira",
                icone: "⚡",
                exercicios: [
                  { nome: "Supino Máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley Frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press 45 graus", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira Flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento Máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca scott", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio(esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '4x': {
            titulo: "Plano Iniciante Masculino - 4x Semana - Peito/Ombro - Costas - Pernas - Braços",
            duracao: "40-50 minutos",
            frequencia: "4x por semana",
            dias: [
              {
                nome: "Segunda-feira - Peito/Ombro",
                icone: "💪",
                exercicios: [
                  { nome: "Supino máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Voador", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Crucifixo inverso", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Costas",
                icone: "🔥",
                exercicios: [
                  { nome: "Pulley frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Remada baixa", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulldown", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Remada máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Pernas",
                icone: "⚡",
                exercicios: [
                  { nome: "Leg press 45 graus", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Stiff halter", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Braços",
                icone: "🎯",
                exercicios: [
                  { nome: "Rosca scott", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca martelo", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Tríceps francês", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Tríceps testa", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '5x': {
            titulo: "Plano Iniciante Masculino - 5x Semana - PPL + Push / Pull",
            duracao: "40-50 minutos",
            frequencia: "5x por semana",
            dias: [
              {
                nome: "Segunda-feira - Push",
                icone: "💪",
                exercicios: [
                  { nome: "Supino máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Voador", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Pull",
                icone: "🔥",
                exercicios: [
                  { nome: "Pulley frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Remada baixa", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulldown", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca scott", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca martelo", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Legs",
                icone: "⚡",
                exercicios: [
                  { nome: "Leg press 45 graus", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Stiff halter", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Push 2",
                icone: "🎯",
                exercicios: [
                  { nome: "Supino máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Crossover", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Tríceps francês", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Pull 2",
                icone: "🏆",
                exercicios: [
                  { nome: "Pulley frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Remada máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca scott", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
        },
        intermediario: {
          '3x': {
            titulo: "Plano Intermediário Masculino - 3x Semana - Fullbody progressivo",
            duracao: "60-90 minutos",
            frequencia: "3x por semana",
            dias: [
              {
                nome: "Segunda-feira",
                icone: "💪",
                exercicios: [
                  { nome: "Supino reto halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Remada baixa", series: "1x", repeticoes: "Aquecimento 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Stiff halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Aquecimento + 2x 10 repetições" },
                  { nome: "Tríceps corda", series: "1x", repeticoes: "Aquecimento + 2x 10 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino reto halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Remada baixa", series: "1x", repeticoes: "Aquecimento 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Stiff halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Aquecimento + 2x 10 repetições" },
                  { nome: "Tríceps corda", series: "1x", repeticoes: "Aquecimento + 2x 10 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira",
                icone: "⚡",
                exercicios: [
                  { nome: "Supino reto halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Remada baixa", series: "1x", repeticoes: "Aquecimento 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Stiff halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Aquecimento + 2x 10 repetições" },
                  { nome: "Tríceps corda", series: "1x", repeticoes: "Aquecimento + 2x 10 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '4x': {
            titulo: "Plano Intermediário Masculino - 4x Semana - Upper / Lower / Upper / Lower",
            duracao: "60-90 minutos",
            frequencia: "4x por semana",
            dias: [
              {
                nome: "Segunda-feira - Upper",
                icone: "💪",
                exercicios: [
                  { nome: "Supino reto halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Remada curvada", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Desenvolvimento halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Lower",
                icone: "🔥",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Stiff", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Panturrilha", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Upper 2",
                icone: "⚡",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Pulldown", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Rosca martelo", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps francês", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower 2",
                icone: "🎯",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Leg press", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '5x': {
            titulo: "Plano Intermediário Masculino - 5x Semana - PPL + Upper / Lower leve",
            duracao: "60-90 minutos",
            frequencia: "5x por semana",
            dias: [
              {
                nome: "Segunda-feira - Push",
                icone: "💪",
                exercicios: [
                  { nome: "Supino reto halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Supino inclinado", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Desenvolvimento halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Pull",
                icone: "🔥",
                exercicios: [
                  { nome: "Remada curvada", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Pulldown", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Rosca martelo", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Legs",
                icone: "⚡",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento +3x 10 repetições" },
                  { nome: "Stiff", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Panturrilha", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Upper",
                icone: "🎯",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Remada baixa", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps francês", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower",
                icone: "🏆",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira flexora", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
        },
        avancado: {
          '3x': {
            titulo: "Plano Avançado Masculino - 3x Semana - Push/Pull/Legs",
            duracao: "120-150 minutos",
            frequencia: "3x por semana",
            dias: [
              {
                nome: "Segunda-feira - Push",
                icone: "💪",
                exercicios: [
                  { nome: "Supino reto barra", series: "1x", repeticoes: "Aquecimento + feeder + 2x8 + 1x8 cluster + back-off 1x 12-15" },
                  { nome: "Supino inclinado com halter", series: "1x", repeticoes: "Aquecimento + feeder + 3x 8-10" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Aquecimento + feeder + 2x 10 + cluster 1x 8" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Aquecimento + feeder + 2x 12" },
                  { nome: "Tríceps corda", series: "1x", repeticoes: "Aquecimento + feeder + 2x 10 + back-off 1x 15" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Pull",
                icone: "🔥",
                exercicios: [
                  { nome: "Barra fixa", series: "1x", repeticoes: "Aquecimento + 3x até a falha + cluster parcial" },
                  { nome: "Remada curvada", series: "1x", repeticoes: "Feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Pulldown", series: "1x", repeticoes: "Feeder + 3x 10" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Feeder + 2x 8 + back-off 1x 12" },
                  { nome: "Rosca martelo", series: "1x", repeticoes: "Feeder + 2x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Legs",
                icone: "⚡",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Leg press", series: "1x", repeticoes: "Feeder + 3x 10 + cluster 1x 8" },
                  { nome: "Stiff halter", series: "1x", repeticoes: "Feeder + 3x 8-10" },
                  { nome: "Cadeira extensora", series: "1x", repeticoes: "Feeder + 2x 12 + back-off 1x 15" },
                  { nome: "Panturrilha em pé", series: "1x", repeticoes: "Feeder + 3x 15 + cluster 1x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '4x': {
            titulo: "Plano Avançado Masculino - 4x Semana - Upper/Lower/Upper/Lower",
            duracao: "120-150 minutos",
            frequencia: "4x por semana",
            dias: [
              {
                nome: "Segunda-feira - Upper",
                icone: "💪",
                exercicios: [
                  { nome: "Supino reto barra", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Remada curvada", series: "1x", repeticoes: "Feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Feeder + 2x 10 + cluster 1x 8" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 2x 12" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Feeder + 2x 10 + back-off" },
                  { nome: "Tríceps corda", series: "1x", repeticoes: "Feeder + 2x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Lower",
                icone: "🔥",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 5 + back-off 1x 12" },
                  { nome: "Leg press", series: "1x", repeticoes: "Feeder + 3x 8-10" },
                  { nome: "Stiff", series: "1x", repeticoes: "Feeder + 3x 8-10 + back-off 1x 12" },
                  { nome: "Cadeira extensora", series: "1x", repeticoes: "Feeder + 2x 12" },
                  { nome: "Panturrilha em pé", series: "1x", repeticoes: "Feeder + 3x 15 + cluster 1x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Upper 2",
                icone: "⚡",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Pulldown", series: "1x", repeticoes: "Feeder + 3x10 + cluster 1x 8" },
                  { nome: "Desenvolvimento máquina", series: "1x", repeticoes: "Feeder + 2x 10" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 2x 12" },
                  { nome: "Rosca martelo", series: "1x", repeticoes: "Feeder + 2x 10 + back-off 1x 15" },
                  { nome: "Tríceps francês", series: "1x", repeticoes: "Feeder + 2x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower 2",
                icone: "🎯",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 6" },
                  { nome: "Cadeira flexora", series: "1x", repeticoes: "Feeder + 3x 10" },
                  { nome: "Elevação pélvica", series: "1x", repeticoes: "Feeder + 3x 10" },
                  { nome: "Cadeira extensora", series: "1x", repeticoes: "Feeder + 3x 15" },
                  { nome: "Panturrilha em pé", series: "1x", repeticoes: "Feeder + 3x 15 + cluster 1x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '5x': {
            titulo: "Plano Avançado Masculino - 5x Semana - PPL + Upper / Lower",
            duracao: "120-150 minutos",
            frequencia: "5x por semana",
            dias: [
              {
                nome: "Segunda-feira - Push",
                icone: "💪",
                exercicios: [
                  { nome: "Supino reto halter", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster + back-off 1x 12" },
                  { nome: "Supino inclinado", series: "1x", repeticoes: "Feeder + 3x 8-10" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Feeder + 2x 10 + cluster 1x 8" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 2x 12" },
                  { nome: "Tríceps corda", series: "1x", repeticoes: "Feeder + 2x 10 + back-off 1x 15" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Pull",
                icone: "🔥",
                exercicios: [
                  { nome: "Barra fixa", series: "1x", repeticoes: "Aquecimento + 3x até a falha + cluster parcial" },
                  { nome: "Pulldown", series: "1x", repeticoes: "Feeder + 3x 10" },
                  { nome: "Remada curvada", series: "1x", repeticoes: "Feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Feeder + 2x 8 + back-off 1x 12" },
                  { nome: "Rosca martelo", series: "1x", repeticoes: "Feeder + 2x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Legs",
                icone: "⚡",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 6 + back-off 1 x 12" },
                  { nome: "Leg press", series: "1x", repeticoes: "Feeder + 3x 10 + cluster 1x 8" },
                  { nome: "Stiff halter", series: "1x", repeticoes: "Feeder + 3x 8-10" },
                  { nome: "Cadeira extensora", series: "1x", repeticoes: "Feeder + 2x 12 + back-off 1x 15" },
                  { nome: "Panturrilha", series: "1x", repeticoes: "Feeder + 3x 15 + cluster 1x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Upper",
                icone: "🎯",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Remada curvada", series: "1x", repeticoes: "Feeder + 2x 8 + cluster 1x 6" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Feeder + 2x 10" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 2x 12" },
                  { nome: "Tríceps francês", series: "1x", repeticoes: "Feeder + 2x 10" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Feeder + 2x 10 + back-off 1x 12" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower",
                icone: "🏆",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x 8 + cluster 1x 6 + back-off 1x 12" },
                  { nome: "Cadeira flexora", series: "1x", repeticoes: "Feeder + 2x 10 + back-off 1x 15" },
                  { nome: "Leg press", series: "1x", repeticoes: "Feeder + 3x 8-10" },
                  { nome: "Stiff barra", series: "1x", repeticoes: "Feeder + 3x 15 + cluster 1x 10" },
                  { nome: "Panturrilha em pé", series: "1x", repeticoes: "Feeder + 3x 15 + cluster 1x 10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
        },
      },
      feminino: {
        iniciante: {
          '3x': {
            titulo: "Plano Iniciante Feminino - 3x Semana - Lower/Upper/Lower Glúteo",
            duracao: "40-50 minutos",
            frequencia: "3x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento no Smith", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Remada baixa", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower Glúteo",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Agachamento búlgaro", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Coice polia", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Abdutora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '4x': {
            titulo: "Plano Iniciante Feminino - 4x Semana - Lower/Upper/Glúteo/Fullbody Leve",
            duracao: "40-50 minutos",
            frequencia: "4x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento no Smith", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Glúteo",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Agachamento búlgaro", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Coice polia", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Abdutora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Fullbody Leve",
                icone: "🎯",
                exercicios: [
                  { nome: "Stiff halter", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Abdutora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '5x': {
            titulo: "Plano Iniciante Feminino - 5x Semana - Lower/Upper/Glúteo/Lower/Upper leve",
            duracao: "40-50 minutos",
            frequencia: "5x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento no Smith", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Desenvolvimento máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Pulley frente", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Glúteo",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Agachamento búlgaro", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Coice polia", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Abdutora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Lower 2",
                icone: "🎯",
                exercicios: [
                  { nome: "Stiff halter", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Leg press", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Upper 2",
                icone: "🏆",
                exercicios: [
                  { nome: "Crucifixo máquina", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Remada baixa", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca martelo", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
        },
        intermediario: {
          '3x': {
            titulo: "Plano Intermediário Feminino - 3x Semana - Lower/Upper/Lower Glúteo",
            duracao: "60-90 minutos",
            frequencia: "3x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Aquecimento + 3x 12 repetições" },
                  { nome: "Desenvolvimento halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Remada baixa", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower Glúteo",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Agachamento búlgaro", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Coice polia", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Abdutora", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Stiff halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '4x': {
            titulo: "Plano Intermediário Feminino - 4x Semana - Lower/Upper/Glúteo/Lower",
            duracao: "60-90 minutos",
            frequencia: "4x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Remada baixa", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Desenvolvimento halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Glúteo",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Agachamento búlgaro", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Coice polia", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Abdutora", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower 2",
                icone: "🎯",
                exercicios: [
                  { nome: "Stiff halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "20-25 minutos" },
                ]
              }
            ]
          },
          '5x': {
            titulo: "Plano Intermediário Feminino - 5x Semana- Lower/Upper/Glúteo Focus/Lower/Upper",
            duracao: "60-90 minutos",
            frequencia: "5x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Leg press", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Cadeira extensora", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Panturrilha em pé", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino halter", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Pulldown", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Desenvolvimento halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Rosca direta", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps corda", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Glúteo Focus",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Coice polia", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Abdutora", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Agachamento búlgaro", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Lower 2",
                icone: "🎯",
                exercicios: [
                  { nome: "Agachamento sumô", series: "1x", repeticoes: "Aquecimento + 3x 10 repetições" },
                  { nome: "Stiff halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cadeira flexora", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Panturrilha sentado", series: "3x", repeticoes: "15 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Upper 2",
                icone: "🏆",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Remada curvada", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Elevação lateral", series: "3x", repeticoes: "12 repetições" },
                  { nome: "Rosca martelo", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Tríceps francês", series: "3x", repeticoes: "10 repetições" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              }
            ]
          },
        },
        avancado: {
          '3x': {
            titulo: "Plano Avançado Feminino - 3x Semana - Lower/Upper/Glúteo Focus",
            duracao: "120-150 minutos",
            frequencia: "3x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x8 + cluster 1x6 + back-off 1x12" },
                  { nome: "Leg press", series: "1x", repeticoes: "Feeder + 3x10 + cluster 1x8" },
                  { nome: "Cadeira extensora", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Stiff halter", series: "1x", repeticoes: "Feeder + 3x8-10" },
                  { nome: "Panturrilha em pé", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Feeder + 3x8 + cluster 1x6" },
                  { nome: "Pulldown", series: "1x", repeticoes: "Feeder + 3x10 + back-off 1x12" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Feeder + 2x10 + back-off 1x15" },
                  { nome: "Tríceps francês polia", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Glúteo Focus",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "1x", repeticoes: "Aquecimento + feeder + 3x10 + cluster 1x8 + back-off 1x15" },
                  { nome: "Coice polia", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Abdutora", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Agachamento búlgaro", series: "1x", repeticoes: "Feeder + 2x10 + back-off 1x15" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              }
            ]
          },
          '4x': {
            titulo: "Plano Avançado Feminino - 4x Semana - Lower/Upper/Glúteo/Lower",
            duracao: "120-150 minutos",
            frequencia: "4x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x8 + cluster 1x6 + back-off 1x12" },
                  { nome: "Leg press", series: "1x", repeticoes: "Feeder + 3x10 + cluster 1x8" },
                  { nome: "Cadeira extensora", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Panturrilha em pé", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino halter", series: "1x", repeticoes: "Feeder + 3x8 + cluster 1x6" },
                  { nome: "Remada curvada", series: "1x", repeticoes: "Feeder + 3x10 + back-off 1x12" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Feeder + 2x10 + back-off 1x15" },
                  { nome: "Tríceps francês", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Glúteo Focus",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "1x", repeticoes: "Aquecimento + feeder + 3x10 + cluster 1x8 + back-off 1x15" },
                  { nome: "Coice polia", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Abdutora", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Lower Pesado",
                icone: "🎯",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x8 + cluster 1x6 + back-off 1x12" },
                  { nome: "Stiff", series: "1x", repeticoes: "Feeder + 3x8-10 + cluster 1x8" },
                  { nome: "Cadeira flexora", series: "1x", repeticoes: "Feeder + 3x10" },
                  { nome: "Panturrilha sentado", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              }
            ]
          },
          '5x': {
            titulo: "Plano Avançado Feminino - 5x Semana- Lower/Upper/Glúteo Focus/Lower/Upper",
            duracao: "120-150 minutos",
            frequencia: "5x por semana",
            dias: [
              {
                nome: "Segunda-feira - Lower",
                icone: "💪",
                exercicios: [
                  { nome: "Agachamento livre", series: "1x", repeticoes: "Aquecimento + feeder + 2x8 + cluster 1x6 + back-off 1x12" },
                  { nome: "Leg press", series: "1x", repeticoes: "Feeder + 3x10 + cluster 1x8" },
                  { nome: "Cadeira extensora", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Panturrilha em pé", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Terça-feira - Upper",
                icone: "🔥",
                exercicios: [
                  { nome: "Supino inclinado halter", series: "1x", repeticoes: "Feeder + 3x8 + cluster 1x6" },
                  { nome: "Pulldown", series: "1x", repeticoes: "Feeder + 3x10 + back-off 1x12" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Rosca direta", series: "1x", repeticoes: "Feeder + 2x10 + back-off 1x15" },
                  { nome: "Tríceps corda", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Quarta-feira - Glúteo Focus",
                icone: "⚡",
                exercicios: [
                  { nome: "Elevação pélvica", series: "1x", repeticoes: "Aquecimento + feeder + 3x10 + cluster 1x8 + back-off 1x15" },
                  { nome: "Coice polia", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Abdutora", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Quinta-feira - Lower 2",
                icone: "🎯",
                exercicios: [
                  { nome: "Agachamento búlgaro", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8 + back-off 1x15" },
                  { nome: "Stiff barra", series: "1x", repeticoes: "Feeder + 3x8-10" },
                  { nome: "Cadeira flexora", series: "1x", repeticoes: "Feeder + 3x10" },
                  { nome: "Panturrilha sentado", series: "1x", repeticoes: "Feeder + 3x15 + cluster 1x10" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              },
              {
                nome: "Sexta-feira - Upper 2",
                icone: "🏆",
                exercicios: [
                  { nome: "Supino reto barra", series: "1x", repeticoes: "Feeder + 3x8 + cluster 1x6" },
                  { nome: "Remada curvada", series: "1x", repeticoes: "Feeder + 3x10 + back-off 1x12" },
                  { nome: "Desenvolvimento halter", series: "1x", repeticoes: "Feeder + 2x10" },
                  { nome: "Elevação lateral", series: "1x", repeticoes: "Feeder + 3x12 + back-off 1x15" },
                  { nome: "Rosca martelo", series: "1x", repeticoes: "Feeder + 2x10" },
                  { nome: "Tríceps francês", series: "1x", repeticoes: "Feeder + 2x10 + cluster 1x8" },
                  { nome: "Cardio (esteira, bicicleta ou escada)", series: "1x", repeticoes: "25-30 minutos" },
                ]
              }
            ]
          },
        },
      },
    };

    // ============================================
    // DADOS DOS PLANOS ALIMENTARES (separados por gênero e nível)
    // ============================================
    const planosDieta = {
      masculino: {
        iniciante: {
          ganhar: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "4 fatias de pão de forma, 4 ovos + 2 claras, 60g requeijão light, 300g iogurte desnatado",
              vegana: "4 fatias pão integral, 60g pasta de amendoim, 300ml leite vegetal, 1 banana + 30g aveia",
              calorias: "≈720 kcal | 55P / 65C / 25G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "4 fatias pão de forma, 100g frango ou atum, 60g requeijão light",
              vegana: "4 fatias pão integral, 120g tofu grelhado, 40g homus",
              calorias: "≈600 kcal | 45P / 55C / 15G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "220g peito de frango, 200g arroz, 200g feijão, 300ml suco",
              vegana: "150g PTS, 200g arroz integral, 200g feijão, Legumes + 1 colher (sopa) azeite",
              calorias: "≈780-800 kcal | 70P / 95-100C / 6-15G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "60g whey, 2 bananas, 300ml leite desnatado, 30g aveia",
              vegana: "Shake: 50g proteína vegetal, 2 bananas, 30g aveia, 300ml leite vegetal",
              calorias: "≈600 kcal | 55P / 70-80C / 5G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "200g patinho ou frango, 200g macarrão cozido",
              vegana: "150g tempeh, 200g macarrão integral, Molho de tomate + 1 colher (sopa) azeite",
              calorias: "≈650-800 kcal | 60P / 65-85C / 12-15G"
            },
            { 
              nome: "Ceia", 
              horario: "22h00", 
              descricao: "200ml leite desnatado, 30g aveia, 15g pasta de amendoim",
              vegana: "200ml leite vegetal, 30g pasta de amendoim, 20g aveia",
              calorias: "≈350-400 kcal | 20P / 25C / 10-20G"
            }
          ],
          perder: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "2 fatias de pão de forma, 2 ovos inteiros, 20g de requeijão light, 150g de iogurte desnatado",
              vegana: "2 fatias de pão integral, 40g de pasta de amendoim, 200ml leite vegetal sem açúcar, 1 banana",
              calorias: "≈330-350 kcal | 32-16P / 28-40C / 12-14G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "2 fatias de pão de forma, 50g de frango desfiado ou atum, 20g de requeijão light",
              vegana: "2 fatias de pão integral, 70g de tofu grelhado, 20g de homus",
              calorias: "≈270-280 kcal | 23-18P / 26-30C / 7G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "120g peito de frango, 80g arroz branco cozido, 120g feijão, 200ml suco natural",
              vegana: "100g PTS (soja), 100g arroz integral, 150g feijão preto, Legumes + 1 colher (chá) azeite",
              calorias: "≈420 kcal | 40-35P / 55C / 3-6G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "30g whey, 1 banana, 150ml leite desnatado, 10g aveia",
              vegana: "Shake com 25g proteína vegetal, 1 banana, 10g aveia, 200ml leite vegetal",
              calorias: "≈270-250 kcal | 30-25P / 30C / 2-3G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "110g patinho moído ou frango, 100g macarrão cozido",
              vegana: "100g tempeh/tofu, 120g macarrão integral, Molho de tomate + 1 fio de azeite",
              calorias: "≈310-330 kcal | 32-30P / 30-35C / 6G"
            }
          ]
        },
        intermediario: {
          ganhar: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "4 fatias de pão de forma, 4 ovos + 2 claras, 60g requeijão light, 300g iogurte desnatado",
              vegana: "4 fatias pão integral, 60g pasta de amendoim, 300ml leite vegetal, 1 banana + 30g aveia",
              calorias: "≈720 kcal | 55P / 65C / 25G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "4 fatias pão de forma, 100g frango ou atum, 60g requeijão light",
              vegana: "4 fatias pão integral, 120g tofu grelhado, 40g homus",
              calorias: "≈600 kcal | 45P / 55C / 15G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "220g peito de frango, 200g arroz, 200g feijão, 300ml suco",
              vegana: "150g PTS, 200g arroz integral, 200g feijão, Legumes + 1 colher (sopa) azeite",
              calorias: "≈780-800 kcal | 70P / 95-100C / 6-15G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "60g whey, 2 bananas, 300ml leite desnatado, 30g aveia",
              vegana: "Shake: 50g proteína vegetal, 2 bananas, 30g aveia, 300ml leite vegetal",
              calorias: "≈600 kcal | 55P / 70-80C / 5G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "200g patinho ou frango, 200g macarrão cozido",
              vegana: "150g tempeh, 200g macarrão integral, Molho de tomate + 1 colher (sopa) azeite",
              calorias: "≈650-800 kcal | 60P / 65-85C / 12-15G"
            },
            { 
              nome: "Ceia", 
              horario: "22h00", 
              descricao: "200ml leite desnatado, 30g aveia, 15g pasta de amendoim",
              vegana: "200ml leite vegetal, 30g pasta de amendoim, 20g aveia",
              calorias: "≈350-400 kcal | 20P / 25C / 10-20G"
            }
          ],
          perder: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "2 fatias de pão de forma, 2 ovos inteiros, 20g de requeijão light, 150g de iogurte desnatado",
              vegana: "2 fatias de pão integral, 40g de pasta de amendoim, 200ml leite vegetal sem açúcar, 1 banana",
              calorias: "≈330-350 kcal | 32-16P / 28-40C / 12-14G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "2 fatias de pão de forma, 50g de frango desfiado ou atum, 20g de requeijão light",
              vegana: "2 fatias de pão integral, 70g de tofu grelhado, 20g de homus",
              calorias: "≈270-280 kcal | 23-18P / 26-30C / 7G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "120g peito de frango, 80g arroz branco cozido, 120g feijão, 200ml suco natural",
              vegana: "100g PTS (soja), 100g arroz integral, 150g feijão preto, Legumes + 1 colher (chá) azeite",
              calorias: "≈420 kcal | 40-35P / 55C / 3-6G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "30g whey, 1 banana, 150ml leite desnatado, 10g aveia",
              vegana: "Shake com 25g proteína vegetal, 1 banana, 10g aveia, 200ml leite vegetal",
              calorias: "≈270-250 kcal | 30-25P / 30C / 2-3G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "110g patinho moído ou frango, 100g macarrão cozido",
              vegana: "100g tempeh/tofu, 120g macarrão integral, Molho de tomate + 1 fio de azeite",
              calorias: "≈310-330 kcal | 32-30P / 30-35C / 6G"
            }
          ]
        },
        avancado: {
          ganhar: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "4 fatias de pão de forma, 4 ovos + 2 claras, 60g requeijão light, 300g iogurte desnatado",
              vegana: "4 fatias pão integral, 60g pasta de amendoim, 300ml leite vegetal, 1 banana + 30g aveia",
              calorias: "≈720 kcal | 55P / 65C / 25G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "4 fatias pão de forma, 100g frango ou atum, 60g requeijão light",
              vegana: "4 fatias pão integral, 120g tofu grelhado, 40g homus",
              calorias: "≈600 kcal | 45P / 55C / 15G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "220g peito de frango, 200g arroz, 200g feijão, 300ml suco",
              vegana: "150g PTS, 200g arroz integral, 200g feijão, Legumes + 1 colher (sopa) azeite",
              calorias: "≈780-800 kcal | 70P / 95-100C / 6-15G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "60g whey, 2 bananas, 300ml leite desnatado, 30g aveia",
              vegana: "Shake: 50g proteína vegetal, 2 bananas, 30g aveia, 300ml leite vegetal",
              calorias: "≈600 kcal | 55P / 70-80C / 5G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "200g patinho ou frango, 200g macarrão cozido",
              vegana: "150g tempeh, 200g macarrão integral, Molho de tomate + 1 colher (sopa) azeite",
              calorias: "≈650-800 kcal | 60P / 65-85C / 12-15G"
            },
            { 
              nome: "Ceia", 
              horario: "22h00", 
              descricao: "200ml leite desnatado, 30g aveia, 15g pasta de amendoim",
              vegana: "200ml leite vegetal, 30g pasta de amendoim, 20g aveia",
              calorias: "≈350-400 kcal | 20P / 25C / 10-20G"
            }
          ],
          perder: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "2 fatias de pão de forma, 2 ovos inteiros, 20g de requeijão light, 150g de iogurte desnatado",
              vegana: "2 fatias de pão integral, 40g de pasta de amendoim, 200ml leite vegetal sem açúcar, 1 banana",
              calorias: "≈330-350 kcal | 32-16P / 28-40C / 12-14G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "2 fatias de pão de forma, 50g de frango desfiado ou atum, 20g de requeijão light",
              vegana: "2 fatias de pão integral, 70g de tofu grelhado, 20g de homus",
              calorias: "≈270-280 kcal | 23-18P / 26-30C / 7G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "120g peito de frango, 80g arroz branco cozido, 120g feijão, 200ml suco natural",
              vegana: "100g PTS (soja), 100g arroz integral, 150g feijão preto, Legumes + 1 colher (chá) azeite",
              calorias: "≈420 kcal | 40-35P / 55C / 3-6G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "30g whey, 1 banana, 150ml leite desnatado, 10g aveia",
              vegana: "Shake com 25g proteína vegetal, 1 banana, 10g aveia, 200ml leite vegetal",
              calorias: "≈270-250 kcal | 30-25P / 30C / 2-3G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "110g patinho moído ou frango, 100g macarrão cozido",
              vegana: "100g tempeh/tofu, 120g macarrão integral, Molho de tomate + 1 fio de azeite",
              calorias: "≈310-330 kcal | 32-30P / 30-35C / 6G"
            }
          ]
        }
      },
      feminino: {
        iniciante: {
          ganhar: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "3 fatias pão de forma, 3 ovos + 1 clara, 40g requeijão light, 200g iogurte",
              vegana: "3 fatias pão integral, 40g pasta de amendoim, 200ml leite vegetal, 1 banana + 20g aveia",
              calorias: "≈550 kcal | 45-25P / 60-65C / 20G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "3 fatias pão de forma, 80g frango, 40g requeijão light",
              vegana: "3 fatias pão integral, 80g tofu, 30g homus",
              calorias: "≈400 kcal | 35-30P / 35C / 10-8G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "150g peito de frango, 120g arroz, 150g feijão, 250ml suco",
              vegana: "120g PTS, 150g arroz integral, 150g feijão, Legumes + azeite",
              calorias: "≈580-650 kcal | 50-45P / 70-80C / 4-12G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "40g whey, 2 bananas, 250ml leite desnatado, 20g aveia",
              vegana: "40g proteína vegetal, 2 bananas, 250ml leite vegetal, 20g aveia",
              calorias: "≈440-500 kcal | 45P / 45-60C / 3-4G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "150g patinho ou frango, 150g macarrão",
              vegana: "150g tempeh, 150g macarrão integral, Molho de tomate + azeite",
              calorias: "≈410-500 kcal | 40-45P / 45-55C / 6-10G"
            },
            { 
              nome: "Ceia", 
              horario: "22h00", 
              descricao: "200ml leite desnatado + 15g pasta de amendoim",
              vegana: "200ml leite vegetal + 20g pasta de amendoim",
              calorias: "≈160-200 kcal | 10P / 10C / 8-10G"
            }
          ],
          perder: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "2 fatias pão de forma, 1 ovo + 2 claras, 20g requeijão light, 150g iogurte desnatado",
              vegana: "2 fatias pão integral, 25g pasta de amendoim, 1 banana pequena, 150ml leite vegetal",
              calorias: "≈330-300 kcal | 26-13P / 30-35C / 10G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "2 fatias pão de forma, 40g frango ou atum, 20g requeijão light",
              vegana: "2 fatias pão integral, 50g tofu, 15g homus",
              calorias: "≈240-230 kcal | 20-15P / 25C / 6-5G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "100g peito de frango, 70g arroz, 100g feijão, 200ml suco",
              vegana: "80g PTS, 80g arroz integral, 120g feijão, Legumes + azeite",
              calorias: "≈400 kcal | 35-32P / 50C / 3-6G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "25g whey, 1 banana, 150ml leite desnatado",
              vegana: "20g proteína vegetal, 1 banana, 150ml leite vegetal, 10g aveia",
              calorias: "≈245-220 kcal | 28-22P / 25C / 2G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "100g patinho ou frango, 100g macarrão",
              vegana: "100g tofu/tempeh, 100g macarrão integral, Molho de tomate",
              calorias: "≈320-250 kcal | 30-25P / 35-30C / 4-3G"
            }
          ]
        },
        intermediario: {
          ganhar: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "3 fatias pão de forma, 3 ovos + 1 clara, 40g requeijão light, 200g iogurte",
              vegana: "3 fatias pão integral, 40g pasta de amendoim, 200ml leite vegetal, 1 banana + 20g aveia",
              calorias: "≈550 kcal | 45-25P / 60-65C / 20G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "3 fatias pão de forma, 80g frango, 40g requeijão light",
              vegana: "3 fatias pão integral, 80g tofu, 30g homus",
              calorias: "≈400 kcal | 35-30P / 35C / 10-8G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "150g peito de frango, 120g arroz, 150g feijão, 250ml suco",
              vegana: "120g PTS, 150g arroz integral, 150g feijão, Legumes + azeite",
              calorias: "≈580-650 kcal | 50-45P / 70-80C / 4-12G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "40g whey, 2 bananas, 250ml leite desnatado, 20g aveia",
              vegana: "40g proteína vegetal, 2 bananas, 250ml leite vegetal, 20g aveia",
              calorias: "≈440-500 kcal | 45P / 45-60C / 3-4G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "150g patinho ou frango, 150g macarrão",
              vegana: "150g tempeh, 150g macarrão integral, Molho de tomate + azeite",
              calorias: "≈410-500 kcal | 40-45P / 45-55C / 6-10G"
            },
            { 
              nome: "Ceia", 
              horario: "22h00", 
              descricao: "200ml leite desnatado + 15g pasta de amendoim",
              vegana: "200ml leite vegetal + 20g pasta de amendoim",
              calorias: "≈160-200 kcal | 10P / 10C / 8-10G"
            }
          ],
          perder: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "2 fatias pão de forma, 1 ovo + 2 claras, 20g requeijão light, 150g iogurte desnatado",
              vegana: "2 fatias pão integral, 25g pasta de amendoim, 1 banana pequena, 150ml leite vegetal",
              calorias: "≈330-300 kcal | 26-13P / 30-35C / 10G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "2 fatias pão de forma, 40g frango ou atum, 20g requeijão light",
              vegana: "2 fatias pão integral, 50g tofu, 15g homus",
              calorias: "≈240-230 kcal | 20-15P / 25C / 6-5G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "100g peito de frango, 70g arroz, 100g feijão, 200ml suco",
              vegana: "80g PTS, 80g arroz integral, 120g feijão, Legumes + azeite",
              calorias: "≈400 kcal | 35-32P / 50C / 3-6G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "25g whey, 1 banana, 150ml leite desnatado",
              vegana: "20g proteína vegetal, 1 banana, 150ml leite vegetal, 10g aveia",
              calorias: "≈245-220 kcal | 28-22P / 25C / 2G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "100g patinho ou frango, 100g macarrão",
              vegana: "100g tofu/tempeh, 100g macarrão integral, Molho de tomate",
              calorias: "≈320-250 kcal | 30-25P / 35-30C / 4-3G"
            }
          ]
        },
        avancado: {
          ganhar: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "3 fatias pão de forma, 3 ovos + 1 clara, 40g requeijão light, 200g iogurte",
              vegana: "3 fatias pão integral, 40g pasta de amendoim, 200ml leite vegetal, 1 banana + 20g aveia",
              calorias: "≈550 kcal | 45-25P / 60-65C / 20G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "3 fatias pão de forma, 80g frango, 40g requeijão light",
              vegana: "3 fatias pão integral, 80g tofu, 30g homus",
              calorias: "≈400 kcal | 35-30P / 35C / 10-8G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "150g peito de frango, 120g arroz, 150g feijão, 250ml suco",
              vegana: "120g PTS, 150g arroz integral, 150g feijão, Legumes + azeite",
              calorias: "≈580-650 kcal | 50-45P / 70-80C / 4-12G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "40g whey, 2 bananas, 250ml leite desnatado, 20g aveia",
              vegana: "40g proteína vegetal, 2 bananas, 250ml leite vegetal, 20g aveia",
              calorias: "≈440-500 kcal | 45P / 45-60C / 3-4G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "150g patinho ou frango, 150g macarrão",
              vegana: "150g tempeh, 150g macarrão integral, Molho de tomate + azeite",
              calorias: "≈410-500 kcal | 40-45P / 45-55C / 6-10G"
            },
            { 
              nome: "Ceia", 
              horario: "22h00", 
              descricao: "200ml leite desnatado + 15g pasta de amendoim",
              vegana: "200ml leite vegetal + 20g pasta de amendoim",
              calorias: "≈160-200 kcal | 10P / 10C / 8-10G"
            }
          ],
          perder: [
            { 
              nome: "Café da Manhã", 
              horario: "7h00", 
              descricao: "2 fatias pão de forma, 1 ovo + 2 claras, 20g requeijão light, 150g iogurte desnatado",
              vegana: "2 fatias pão integral, 25g pasta de amendoim, 1 banana pequena, 150ml leite vegetal",
              calorias: "≈330-300 kcal | 26-13P / 30-35C / 10G"
            },
            { 
              nome: "Lanche da Manhã", 
              horario: "10h00", 
              descricao: "2 fatias pão de forma, 40g frango ou atum, 20g requeijão light",
              vegana: "2 fatias pão integral, 50g tofu, 15g homus",
              calorias: "≈240-230 kcal | 20-15P / 25C / 6-5G"
            },
            { 
              nome: "Almoço", 
              horario: "12h30", 
              descricao: "100g peito de frango, 70g arroz, 100g feijão, 200ml suco",
              vegana: "80g PTS, 80g arroz integral, 120g feijão, Legumes + azeite",
              calorias: "≈400 kcal | 35-32P / 50C / 3-6G"
            },
            { 
              nome: "Lanche da Tarde", 
              horario: "16h00", 
              descricao: "25g whey, 1 banana, 150ml leite desnatado",
              vegana: "20g proteína vegetal, 1 banana, 150ml leite vegetal, 10g aveia",
              calorias: "≈245-220 kcal | 28-22P / 25C / 2G"
            },
            { 
              nome: "Jantar", 
              horario: "19h30", 
              descricao: "100g patinho ou frango, 100g macarrão",
              vegana: "100g tofu/tempeh, 100g macarrão integral, Molho de tomate",
              calorias: "≈320-250 kcal | 30-25P / 35-30C / 4-3G"
            }
          ]
        }
      }
    };


    // ============================================
    // BANCO DE VÍDEOS POR EXERCÍCIO
    // ============================================
    const bancoVideos = {
      "Supino máquina": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05771201-Lever-Chest-Press_Chest.mp4",
      "Pulley Frente": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01501201-Cable-Bar-Lateral-Pulldown_Back.mp4", 
      "Leg press": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/07391201-Sled-45-Leg-Press_Hips.mp4",
      "Cadeira flexora": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05991201-Lever-Seated-Leg-Curl_Thighs.mp4",
      "Rosca martelo": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/16571201-Dumbbell-Cross-Body-Hammer-Curl-(Version-2)_Upper-Arms-FIX.mp4",
      "Pulldown": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02381201-Cable-Straight-Arm-Pulldown_Back.mp4",
      "Desenvolvimento máquina": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/14541201-Lever-Seated-Shoulder-Press_Shoulders.mp4",
      "Desenvolvimento halter": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/04051201-Dumbbell-Seated-Shoulder-Press_Shoulders.mp4",
      "Rosca scott": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05921201-Lever-Preacher-Curl_Upper-Arms.mp4",
      "Pulley corda": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/24381201-Cable-Pushdown-(with-rope-attachment)-(female)_Upper-Arms.mp4",
      "Panturrilha sentado": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05941201-Lever-Seated-Calf-Raise-(plate-loaded).mp4",
      "Panturrilha em pé": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/11641201-Smith-Calf-Raise-(version-2)_Calves.mp4",
      "Agachamento livre": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00431201-Barbell-Full-Squat_Thighs.mp4",
      "Stiff halter": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/14591201-Dumbbell-Romanian-Deadlift_Hips.mp4",
      "Elevação lateral": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03341201-Dumbbell-Lateral-Raise_shoulder.mp4",
      "Tríceps corda": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/24381201-Cable-Pushdown-(with-rope-attachment)-(female)_Upper-Arms.mp4",
      "Remada curvada": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00271201-Barbell-Bent-Over-Row_Back.mp4",
      "Remada baixa": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/26611201-Cable-Seated-Row-with-V-bar_Back.mp4",
      "Remada máquina": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05881201-Lever-Neutral-Grip-Seated-Row-(plate-loaded)_Back-.mp4",
      "Rosca direta": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02941201-Dumbbell-Biceps-Curl_Upper-Arms.mp4",
      "Tríceps francês": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03621201-Dumbbell-One-Arm-Triceps-Extension-(on-bench)_Upper-Arms.mp4",
      "Tríceps francês polia": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01941201-Cable-Overhead-Triceps-Extension-(rope-attachment)_Upper-Arms-FIX_.mp4",
      "Agachamento no Smith": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/07501201-Smith-Chair-Squat_Thighs.mp4",
      "Barra fixa": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/06521201-Pull-up_Back.mp4",
      "Cadeira extensora": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05851201-Lever-Leg-Extension_Thighs.mp4",
      "Elevação pélvica": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/10601201-Barbell-Hip-Thrust_Hips-FIX_.mp4",
      "Agachamento búlgaro": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/22901201-Dumbbell-Bulgarian-Split-Squat-(female)_Thighs.mp4",
      "Coice polia": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/60401201-Cable-Donkey-Kickback-(male)_Hips_.mp4",
      "Abdutora": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05971201-Lever-Seated-Hip-Abduction_Hips.mp4",
      "Stiff barra": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/01161201-Barbell-Straight-Leg-Deadlift_Thighs.mp4",
      "Crucifixo inverso": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/06021201-Lever-Seated-Reverse-Fly_Shoulders.mp4",
      "Supino inclinado halter": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/03141201-Dumbbell-Incline-Bench-Press_Chest.mp4",
      "Crucifixo máquina": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05961201-Lever-Seated-Fly_Chest.mp4",
      "Voador": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05961201-Lever-Seated-Fly_Chest.mp4",
      "Crossover": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/12691201-Cable-Standing-Up-Straight-Crossovers_Chest.mp4",
      "Tríceps testa": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/22511201-Dumbbell-Lying-Triceps-Extension-(female)_Upper-Arms_.mp4",
      "Agachamento sumô": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/23221201-Dumbbell-Sumo-Squat-(female)_Thighs_.mp4",
      "Supino reto halter": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/02891201-Dumbbell-Bench-Press_Chest.mp4",
      "Supino reto barra": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00251201-Barbell-Bench-Press_Chest.mp4",
      "Supino inclinado barra": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00471201-Barbell-Incline-Bench-Press_Chest.mp4",
      "Supino inclinado": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/00471201-Barbell-Incline-Bench-Press_Chest.mp4",
      "Panturrilha": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/05941201-Lever-Seated-Calf-Raise-(plate-loaded).mp4",
      "Stiff": "https://d2l9nsnmtah87f.cloudfront.net/exercise-assets/14591201-Dumbbell-Romanian-Deadlift_Hips.mp4",
    };

    // ============================================
    // ESTADO GLOBAL DA APLICAÇÃO
    // ============================================
    let dadosUsuario = {
      nome: '',
      idade: 0,
      peso: 0,
      altura: 0,
      genero: 'masculino',
      nivel: 'iniciante',
      frequencia: '3x',
      objetivo: 'ganhar'
    };

    // ============================================
    // FUNÇÕES DE NAVEGAÇÃO ENTRE TELAS
    // ============================================
    
    /**
     * Mostra apenas a tela especificada, esconde as demais
     */
    function mostrarTela(idTela) {
      const telas = ['telaInicial', 'telaFormulario', 'telaCarregamento', 'telaTreino'];
      telas.forEach(id => {
        const elemento = document.getElementById(id);
        if (id === idTela) {
          elemento.classList.remove('oculto');
          // Re-trigger animation
          elemento.style.animation = 'none';
          setTimeout(() => {
            elemento.style.animation = '';
          }, 10);
        } else {
          elemento.classList.add('oculto');
        }
      });
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Volta para a tela inicial
     */
    function mostrarTelaInicial() {
      mostrarTela('telaInicial');
    }

    /**
     * Mostra o formulário
     */
    function mostrarFormulario() {
      mostrarTela('telaFormulario');
    }

    /**
     * Mostra a tela de carregamento
     */
    function mostrarCarregamento() {
      mostrarTela('telaCarregamento');
    }

    /**
     * Mostra a tela do treino
     */
    function mostrarTreino() {
      mostrarTela('telaTreino');
    }

    // ============================================
    // LÓGICA DO FORMULÁRIO
    // ============================================
    
    /**
     * Processa o envio do formulário
     */
    function manipularEnvio(event) {
      event.preventDefault();
      
      // Captura os dados do formulário
      dadosUsuario.nome = document.getElementById('nome').value.trim();
      dadosUsuario.idade = parseInt(document.getElementById('idade').value);
      dadosUsuario.peso = parseFloat(document.getElementById('peso').value);
      dadosUsuario.altura = parseFloat(document.getElementById('altura').value);
      dadosUsuario.genero = document.getElementById('genero').value;
      dadosUsuario.nivel = document.getElementById('nivel').value;
      dadosUsuario.frequencia = document.getElementById('frequencia').value;
      dadosUsuario.objetivo = document.getElementById('objetivo').value;

      // Validação básica
      if (!dadosUsuario.nome || !dadosUsuario.idade || !dadosUsuario.peso || !dadosUsuario.altura || !dadosUsuario.genero || !dadosUsuario.frequencia) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      // Atualiza o nome na tela de carregamento
      document.getElementById('nomeCarregamento').textContent = dadosUsuario.nome;

      // Mostra a tela de carregamento
      mostrarCarregamento();

      // Simula processamento (2 segundos)
      setTimeout(() => {
        gerarTreino();
        mostrarTreino();
      }, 2000);
    }

    // ============================================
    // CÁLCULOS E GERAÇÃO DO TREINO
    // ============================================
    
    /**
     * Calcula o IMC (Índice de Massa Corporal)
     */
    function calcularIMC() {
      const alturaEmMetros = dadosUsuario.altura / 100;
      const imc = dadosUsuario.peso / (alturaEmMetros * alturaEmMetros);
      return imc.toFixed(1);
    }

    /**
     * Calcula a quantidade de água recomendada
     */
    function calcularAgua() {
      const litrosAgua = (dadosUsuario.peso * 40) / 1000;
      return litrosAgua.toFixed(1);
    }

    /**
     * Gera o treino e dieta personalizados e atualiza a tela
     */
    function gerarTreino() {
      // Seleciona o plano baseado em gênero, nível e frequência semanal
      const plano = planosTreino[dadosUsuario.genero][dadosUsuario.nivel][dadosUsuario.frequencia];
      const dieta = planosDieta[dadosUsuario.genero][dadosUsuario.nivel][dadosUsuario.objetivo];
      
      // Atualiza informações do usuário
      document.getElementById('nomeUsuario').textContent = dadosUsuario.nome;
      document.getElementById('idadeUsuario').textContent = dadosUsuario.idade;
      document.getElementById('imcUsuario').textContent = calcularIMC();
      
      // Traduz o nível
      const textoNivel = {
        iniciante: 'Iniciante',
        intermediario: 'Intermediário', 
        avancado: 'Avançado'
      };
      document.getElementById('nivelUsuario').textContent = textoNivel[dadosUsuario.nivel];

      // Atualiza informações do plano
      document.getElementById('tituloPlano').textContent = plano.titulo;
      document.getElementById('duracaoPlano').textContent = plano.duracao;
      document.getElementById('frequenciaPlano').textContent = plano.frequencia;

      // Gera os treinos divididos por dia da semana
      const containerDiasTreino = document.getElementById('containerDiasTreino');
      containerDiasTreino.innerHTML = '';
      
      plano.dias.forEach((dia) => {
        const secaoDia = document.createElement('div');
        secaoDia.className = 'secao-dia';
        
        let exerciciosHTML = '';
        dia.exercicios.forEach((exercicio, indice) => {
          exerciciosHTML += `
            <div class="item-exercicio">
              <div class="conteudo-exercicio">
                <div class="numero-exercicio">${indice + 1}</div>
                <div>
                  <div class="nome-exercicio">
                    ${exercicio.nome}
                    <button class="botao-icone-video" onclick="abrirModalVideo('${exercicio.nome}')" title="Ver vídeo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                  </div>
                  <div class="detalhes-exercicio">${exercicio.series} • ${exercicio.repeticoes}</div>
                </div>
              </div>
              <div class="verificacao-exercicio" style="color: var(--primaria); font-size: 20px;">✓</div>
            </div>
          `;
        });
        
        secaoDia.innerHTML = `
          <div class="cabecalho-dia">
            <span class="icone-dia">${dia.icone}</span>
            <span class="nome-dia">${dia.nome}</span>
          </div>
          <div class="lista-exercicios">
            ${exerciciosHTML}
          </div>
        `;
        
        containerDiasTreino.appendChild(secaoDia);
      });

      // Calcula e exibe a hidratação recomendada
      const quantidadeAgua = calcularAgua();
      document.getElementById('valorHidratacao').textContent = `${quantidadeAgua}L`;

      // Gera a dieta
      const listaDieta = document.getElementById('listaDieta');
      listaDieta.innerHTML = '';

      dieta.forEach((refeicao) => {
        const itemRefeicao = document.createElement('div');
        itemRefeicao.className = 'item-refeicao';
        
        // Separar os alimentos por vírgula e criar lista
        const alimentosNormais = refeicao.descricao.split(', ');
        const alimentosVeganos = refeicao.vegana.split(', ');
        
        itemRefeicao.innerHTML = `
          <div class="cabecalho-refeicao">
            <span class="nome-refeicao">${refeicao.nome}</span>
            <span class="hora-refeicao">${refeicao.horario}</span>
          </div>
          
          <div class="secao-refeicao">
            <div class="rotulo-tipo-refeicao">🍽️ Normal:</div>
            <div class="alimentos-refeicao">
              ${alimentosNormais.map(alimento => `<div class="item-alimento">${alimento}</div>`).join('')}
            </div>
            <div class="calorias-refeicao">${refeicao.calorias}</div>
          </div>
          
          <div class="opcao-vegana">
            <div class="rotulo-tipo-refeicao">🌱 Vegana:</div>
            <div class="alimentos-refeicao">
              ${alimentosVeganos.map(alimento => `<div class="item-alimento">${alimento}</div>`).join('')}
            </div>
            <div class="calorias-refeicao">${refeicao.calorias}</div>
          </div>
        `;
        listaDieta.appendChild(itemRefeicao);
      });
    }

    /**
     * Reseta a aplicação e volta para o início
     */
    function reiniciarAplicativo() {
      // Limpa os dados do usuário
      dadosUsuario = {
        nome: '',
        idade: 0,
        peso: 0,
        altura: 0,
        genero: 'masculino',
        nivel: 'iniciante',
        frequencia: '3x',
        objetivo: 'ganhar'
      };

      // Limpa o formulário
      document.getElementById('formularioUsuario').reset();

      // Volta para a tela inicial
      mostrarTelaInicial();
    }

    /**
     * Abre o modal de vídeo
     */
    function abrirModalVideo(nomeExercicio) {
        const modal = document.getElementById('modalVideo');
        const titulo = document.getElementById('tituloModalVideo');
        const placeholderVideo = document.querySelector('.placeholder-video');
        
        titulo.textContent = `Demonstração: ${nomeExercicio}`;
        
        // Verifica se existe vídeo para este exercício
        const caminhoVideo = bancoVideos[nomeExercicio];
        
        if (caminhoVideo) {
            // Substitui o placeholder pelo elemento de vídeo HTML5
            placeholderVideo.innerHTML = `
            <video 
                controls 
                width="100%" 
                height="315"
                style="border-radius: 12px;"
            >
                <source src="${caminhoVideo}" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
            </video>
            `;
        } else {
            // Se não tiver vídeo, mostra mensagem
            placeholderVideo.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <p style="font-weight: 600; margin-bottom: 8px;">🎬 Vídeo em breve</p>
                <p style="font-size: 13px;">Vídeo demonstrativo do exercício<br>será adicionado em breve.</p>
            </div>
            `;
        }
        
        modal.classList.remove('oculto');
    }
    /**
     * Fecha o modal de vídeo
     */
    function fecharModalVideo(event) {
        if (event && event.target !== event.currentTarget && !event.target.classList.contains('fechar-modal-video')) {
            return;
        }
        const modal = document.getElementById('modalVideo');
        modal.classList.add('oculto');
        document.body.style.overflow = 'auto';
        
        // Para o vídeo MP4 atual
        const video = document.querySelector('.placeholder-video video');
        if (video) {
            video.pause(); // Pausa o vídeo
            video.currentTime = 0; // Volta para o início
        }
    }
    /**
     * Manipula o envio do formulário de contato
     */
    function manipularEnvioContato(event) {
      event.preventDefault();
      const nome = document.getElementById('nomeContato').value;
      alert(`Obrigado pela mensagem, ${nome}! Entraremos em contato em breve.`);
      document.getElementById('formularioContato').reset();
    }

    /**
     * Controla o carrossel da equipe
     */
    let posicaoCarrossel = 0;
    function moverCarrossel(direcao) {
      const trilha = document.getElementById('trilhaCarrosselEquipe');
      const cartoes = trilha.querySelectorAll('.cartao-equipe');
      const larguraCartao = cartoes[0].offsetWidth + 16; // card width + margin
      const posicaoMaxima = -(cartoes.length - 3) * larguraCartao;
      
      posicaoCarrossel -= direcao * larguraCartao;
      
      if (posicaoCarrossel > 0) {
        posicaoCarrossel = posicaoMaxima;
      } else if (posicaoCarrossel < posicaoMaxima) {
        posicaoCarrossel = 0;
      }
      
      trilha.style.transform = `translateX(${posicaoCarrossel}px)`;
    }

    // ============================================
    // SISTEMA DE ABAS
    // ============================================
    
    /**
     * Alterna entre as abas de treino e dieta
     */
    function alternarAba(aba) {
      // Remove a classe ativa de todas as abas
      document.querySelectorAll('.aba').forEach(aba => {
        aba.classList.remove('ativa');
      });
      
      // Remove a classe ativa de todos os conteúdos
      document.querySelectorAll('.conteudo-aba').forEach(conteudo => {
        conteudo.classList.remove('ativa');
      });
      
      // Adiciona a classe ativa à aba selecionada
      document.querySelector(`.aba[onclick="alternarAba('${aba}')"]`).classList.add('ativa');
      
      // Adiciona a classe ativa ao conteúdo correspondente
      document.getElementById(`aba-${aba}`).classList.add('ativa');
    }

    // ============================================
    // FRASES MOTIVACIONAIS ALEATÓRIAS
    // ============================================
    
    const frasesMotivacionais = [
      "Seu progresso começa hoje. Um passo consistente vale mais que intenções perfeitas.",
      "A transformação não acontece quando você quer desistir. Ela acontece quando você continua.",
      "Cada treino é uma vitória. Cada série é um passo mais perto do seu objetivo.",
      "Seu único limite é você mesmo. Supere-se todos os dias.",
      "O corpo alcança o que a mente acredita. Acredite no seu potencial.",
      "Resultados não vêm de conforto. Eles vêm de consistência e dedicação."
    ];

    /**
     * Seleciona e exibe uma frase motivacional aleatória
     */
    function definirMotivacaoAleatoria() {
      const indiceAleatorio = Math.floor(Math.random() * frasesMotivacionais.length);
      const textoMotivacao = document.getElementById('textoMotivacao');
      if (textoMotivacao) {
        textoMotivacao.textContent = `"${frasesMotivacionais[indiceAleatorio]}"`;
      }
    }

    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    
    // Quando a página carregar, garante que apenas a tela inicial está visível
    document.addEventListener('DOMContentLoaded', function() {
      mostrarTelaInicial();
      definirMotivacaoAleatoria();
    });