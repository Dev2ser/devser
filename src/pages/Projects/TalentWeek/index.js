import React from 'react';
import { SEO } from '../../../components';
import { capitalizeFirstLetter } from '../../../services/Helpers';
import mawhibaImg from '../../../assets/images/mawhiba.svg';
import standoutImg from '../../../assets/images/standout.svg';
import studentImg from '../../../assets/images/student.svg';

export const TalentWeek = ({ location }) => {
  const title =
    capitalizeFirstLetter(location.pathname.split(/[//]/)[1]) +
    ' - Talent Week';

  return (
    <React.Fragment>
      <SEO title={title} />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 pt-0 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded"
            alt="hero"
            src={mawhibaImg}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1
              class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900"
              // style={{ fontFamily: 'Tajawal' }}
            >
              الأسبوع الوطني للموهبة والإبداع
            </h1>
            <p class="mb-8 leading-relaxed">
              بادر في مشاركة وإبراز موهبتك في الأسبوع الوطني للموهبة والإبداع
              حتى يوم الخميس الموافق 28/8/1443
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a
                  className="hover:text-current no-underline py-2 px-6 "
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdcK2g-JiTyWI_1wblE9xHbIYgKzt0vikirE6v7-xuDQUz6nA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  التسجيل
                </a>
                {/* https://docs.google.com/forms/d/e/1FAIpQLSdcK2g-JiTyWI_1wblE9xHbIYgKzt0vikirE6v7-xuDQUz6nA/viewform */}
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                للمزيد من المعلومات
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={standoutImg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ماهي الموهبة؟
              <br class="inline-block" />
              What's Talent?
            </h1>
            <p class="mb-8 leading-relaxed">
              لا يوجد تعريف واحد متفق عليه في الأوساط التربوية حول تعريف
              الموهبة، ولكن من أكثر تعريفات الموهبة شيوعاً هو تعريف العالم
              رينزولي و الذي يصف السلوك الموهوب بأنه نتيجة لتفاعل ثلاث خصائص لدى
              الفرد و هذه الخصائص هي: قدرة فوق المتوسط، مستويات عالية من
              الإبداع، مستويات عالية من الإلتزام بالمهمة. بينما يشترط العالم
              ستيرنبيرغ وجود ثلاث قدرات على مستوى عالٍ لوصف الموهبة و هذه
              القدرات هي : الذكاء التحليلي والإبداع والذكاء التطبيقي أو العلمي
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a
                  className="hover:text-current no-underline py-2 px-6"
                  href="https://ar.wikipedia.org/wiki/%D8%AC%D9%88%D8%B2%D9%8A%D9%81_%D8%B1%D9%86%D8%B2%D9%88%D9%84%D9%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  نبذة عن العالم رينزولي
                </a>
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              الطلبة الموهوبين
              <br class="inline-block" />
              Gifted Students
            </h1>
            <p class="mb-8 leading-relaxed">
              الطالب الموهوب هو الذي يوجد لديه استعدادات فطريّة وقدرات غير
              عاديّة أو أداء متميز عن بقية أقرانه في مجال أو أكثر من المجـالات
              التي يقدّرها المجتمع ، وخاصة مجالات التفوق العقلي والتفكير
              الابتكاري والتحصيل العلمي والمهارات والقدرات الخاصة
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-gray-700 bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <a
                  className="hover:text-current no-underline py-2 px-6 "
                  href="https://www.mawhiba.org/Ar/programs/selection/Pages/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  البرنامج الوطني للكشف عن الموهوبين
                </a>
              </button>
              <button class="ml-4 inline-flex text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a
                  className="hover:text-current no-underline py-2 px-6"
                  href="https://www.mawhiba.org/Ar/Pages/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  موهبة
                </a>
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={studentImg}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ماذا يقصد بالأسبوع الوطني للموهبة والإبداع؟
            </h1>
            <p class="mb-8 leading-relaxed">
              هو برنامج توعوي يعمل على نشر ثقافة الموهبة والإبداع من خلال تقديم
              فعاليات وأنشطة متنوعة طيلة أسبوع دراسي كامل بالتزامن مع اليوم
              الخليجي للموهبة والإبداع، وذلك سعياً لدعم البيئات المحفزة للموهبة
              والإبداع
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-gray-700 bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <a
                  className="hover:text-current no-underline py-2 px-6"
                  href="/"
                >
                  الصفحة الرئيسية
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
