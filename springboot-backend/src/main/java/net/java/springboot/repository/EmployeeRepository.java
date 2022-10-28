package net.java.springboot.repository;

import net.java.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Steven Hogenson on 10/27/2022
 * @project springboot-backend
 */

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
