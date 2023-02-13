const BtnModal = document.querySelector('.btn');
        const Fechar = document.querySelector('.closeModal');
        const Modal = document.querySelector('.modal');
        const Iframe = document.getElementById('yt');
        const Link = Iframe.src;

        function OpenModal() {
            Modal.classList.add('opend');
            Iframe.setAttribute("src", Link);

        }
        function CloseModal() {
            Modal.classList.remove('opend');
            Iframe.setAttribute("src", "");
        }