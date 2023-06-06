import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private titleService: Title,
              private router: Router) {
    titleService.setTitle(`Gestão de Milhas - Login`);
  }

  cpfUser = '';
  password = '';
  errorMessage = '';

  ngOnInit(): void {
  }

  login() {
    if (this.cpfUser === '70184012163' && this.password === '123456') {
      console.log("Login com sucesso");
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Credenciais inválidas. Por favor, tente novamente.';
    }
  }

  resetErrorMessage() {
    this.errorMessage = '';
  }
}
