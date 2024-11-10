import React from 'react';

const faqs = [
  {
    question: 'Što je BMI i kako se izračunava?',
    answer: 'BMI (indeks tjelesne mase) je mjera koja koristi vašu visinu i težinu za procjenu imate li zdravu težinu. Izračunava se dijeljenjem težine u kilogramima s kvadratom visine u metrima.'
  },
  {
    question: 'Koje su normalne vrijednosti BMI-a?',
    answer: 'Normalan raspon BMI-a je između 18.5 i 24.9. BMI ispod 18.5 ukazuje na pothranjenost, 25-29.9 na prekomjernu težinu, a iznad 30 na pretilost.'
  },
  {
    question: 'Je li BMI pouzdan pokazatelj zdravlja?',
    answer: 'BMI je koristan alat za procjenu, ali ima ograničenja. Ne razlikuje mišićnu masu od masnog tkiva i ne uzima u obzir raspodjelu masnoće u tijelu.'
  },
  {
    question: 'Kako mogu poboljšati svoj BMI?',
    answer: 'BMI možete poboljšati kroz kombinaciju zdrave prehrane i redovite tjelesne aktivnosti. Preporučuje se postupna promjena težine od 0.5-1 kg tjedno.'
  },
  {
    question: 'Utječe li dob na interpretaciju BMI-a?',
    answer: 'Da, interpretacija BMI-a može varirati ovisno o dobi. Starije osobe mogu imati nešto viši BMI, dok djeca i adolescenti imaju posebne BMI tablice.'
  }
];

export function BMIFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Često Postavljana Pitanja
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <div className="p-6">
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div
                  className="text-gray-600"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}